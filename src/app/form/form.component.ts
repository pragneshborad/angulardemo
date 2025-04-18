import { MasterServicesService } from './../services/master-services.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {

    constructor(private MasterServices: MasterServicesService) { }

    @ViewChild('inquiryForm', { static: false })
    form!: NgForm;

    emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    public inquiry_obj: any = {

    };


    public isloginSubmitted: boolean = false;
    public button_text: string = "Submit";
    SubmitinquiryForm() {
        if (!this.isloginSubmitted) {


            this.isloginSubmitted = true;
            this.button_text = "Please Wait...";

            const obj = this.inquiry_obj;
            const mapped = Object.keys(obj).map(key => ({ type: key, value: obj[key] }));

            this.MasterServices.contact_inquiry_save(mapped).subscribe((res: any) => {
                var response = JSON.parse(JSON.stringify(res));
                if (response.success) {
                    this.form.resetForm();
                    this.inquiry_obj = {};
                    // this.ToastService.success(response.message);
                } else {
                    // this.ToastService.error(response.message);
                }

                this.isloginSubmitted = false;
                this.button_text = "Submit";
            }, (error: any) => {
                // this.form.resetForm();
                this.isloginSubmitted = false;
                this.button_text = "Submit";
                // this.ToastService.error('Opps...something went wrong, Plesae try again.');
            })
        }
    }





    check_form(form: any) {
        console.log(form, "form");
        if (form.status == 'INVALID') {

            if (this.inquiry_obj.name == undefined || this.inquiry_obj.name == '') {
                this.inquiry_obj.error('The Name Field is required.');
            }

            else if (this.inquiry_obj.email_address == undefined || this.inquiry_obj.email_address == '') {
                this.inquiry_obj.error('The Email Field is required.');
            }
            else if (!this.emailPattern.test(this.inquiry_obj.email_address)) {
                this.inquiry_obj.error('Please Enter a Valid Email address.');
            }

            else if (this.inquiry_obj.contact_no == undefined || this.inquiry_obj.contact_no == '') {
                this.inquiry_obj.error('The Contact Field is required.');
            }
            else if (this.inquiry_obj.contact_no.length < 8) {
                this.inquiry_obj.error('Please Enter a Valid Contact number.');
            }

            else if (this.inquiry_obj.subject == undefined || this.inquiry_obj.subject == '') {
                this.inquiry_obj.error('The Subject Field is required.');
            }


        }
    }
}

