import { MasterServicesService } from './../services/master-services.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {

    captchaForm: FormGroup;
    randomNum1: any;
    randomNum2: any;
    total: any;
    successMessage: string = '';
    failMessage: string = '';

    categories: any[] = [];
    // selectedCategory: string = '';

    constructor(
        private MasterServices: MasterServicesService,
        private ToastService: ToastService,
        private formBuilder: FormBuilder,
    ) {
        this.captchaForm = this.formBuilder.group({
            answer: ['', Validators.required]
        });
    }

    ngOnInit(): void {

        this.generateCaptcha();
        this.loadData();

        this.captchaForm.get('answer')?.valueChanges.subscribe(value => {
            const inputValue = parseInt(value, 10);
            if (inputValue === this.total) {
                this.successMessage = 'Correct ';
                this.failMessage = '';
            } else if (value !== '') {
                this.failMessage = 'Incorrect ';
                this.successMessage = '';
            } else {
                this.failMessage = '';
                this.successMessage = '';
            }
        });
    }
    generateCaptcha() {
        const maxNum = 10;
        this.randomNum1 = Math.ceil(Math.random() * maxNum);
        this.randomNum2 = Math.ceil(Math.random() * maxNum);
        this.total = this.randomNum1 + this.randomNum2;
        this.successMessage = '';
        this.failMessage = '';
        this.captchaForm.reset();
    }

    resetCaptcha() {
        this.generateCaptcha();
        this.successMessage = '';
        this.failMessage = '';
    }

    loadData() {
        this.MasterServices.loadCategory().subscribe((res: any) => {
            if (res.success && res.data) {
                this.categories = res.data;
            } else {
                this.ToastService.error("Failed to load categories.");
            }
        });
    }

    onFileChange(event: any) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            this.inquiry_obj.attachment = file;

        }
    }

    @ViewChild('inquiryForm', { static: false })
    form!: NgForm;

    emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    public inquiry_obj: any = {

    };
  


    public isloginSubmitted: boolean = false;
    public button_text: string = "Submit";
    SubmitinquiryForm() {
        if (!this.isloginSubmitted) {

            if (!this.isCaptchaSolved()) {
                this.ToastService.error('Please solve the CAPTCHA.');
                return;
            }

            this.isloginSubmitted = true;
            this.button_text = "Please Wait...";

            const obj = this.inquiry_obj;
            const mapped = Object.keys(obj).map(key => ({ type: key, value: obj[key] }));

            this.MasterServices.contact_inquiry_save(mapped).subscribe((res: any) => {
                var response = JSON.parse(JSON.stringify(res));
                if (response.success) {
                    this.form.resetForm();
                    this.resetCaptcha();
                    this.inquiry_obj = {};
                    // this.inquiry_obj.inquiry_type = "1";
                    this.ToastService.success(response.message);
                } else {
                    this.ToastService.error(response.message);
                }

                this.isloginSubmitted = false;
                this.button_text = "Submit";
            }, (error: any) => {
                // this.form.resetForm();
                this.isloginSubmitted = false;
                this.button_text = "Submit";
                this.ToastService.error('Opps...something went wrong, Plesae try again.');
            })
        }
    }

    isCaptchaSolved(): boolean {
        const answer = this.captchaForm.get('answer')?.value;
        return parseInt(answer, 10) === this.total;
    }

    check_form(form: any) {
        // console.log(form, "form");
        if (form.status == 'INVALID') {

            if (this.inquiry_obj.name == undefined || this.inquiry_obj.name == '') {
                this.ToastService.error('The Name Field is required.');
            }

            else if (this.inquiry_obj.email_address == undefined || this.inquiry_obj.email_address == '') {
                this.ToastService.error('The Email Field is required.');
            }
            else if (!this.emailPattern.test(this.inquiry_obj.email_address)) {
                this.ToastService.error('Please Enter a Valid Email address.');
            }

            else if (this.inquiry_obj.contact_no == undefined || this.inquiry_obj.contact_no == '') {
                this.ToastService.error('The Contact Field is required.');
            }
            else if (this.inquiry_obj.contact_no.length < 8) {
                this.ToastService.error('Please Enter a Valid Contact number.');
            }

            else if (this.inquiry_obj.subject == undefined || this.inquiry_obj.subject == '') {
                this.ToastService.error('The Subject Field is required.');
            }

            else if (this.inquiry_obj.category_id == undefined || this.inquiry_obj.category_id == '') {
                this.ToastService.error('Please select  one category.');
            }

            else if (!this.isCaptchaSolved()) {
                this.ToastService.error('Please solve the CAPTCHA.');
                return;
            }

        }
    }
}
