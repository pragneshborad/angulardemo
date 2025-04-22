import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MasterServicesService {

    constructor(
        private http: HttpClient,
    ) { }

   
    contact_inquiry_save(data: any): Observable<any> {
        const url = environment.api_url + 'inquiry/inquiry/save';

        const formData: FormData = new FormData();
        formData.append('call_app', "true");
        data.forEach((element: any) => {
            formData.append(element.type, element.value);
        });

        let httpHeaders = new HttpHeaders({
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'User PBT24RIFM16VGTHRT6PSRTBQIN4AGT78Y456455GR3FU8778FGH8TYDU4648534FV75',
        });
        return this.http.post(url, formData, { headers: httpHeaders });
    }

   
    loadCategory(id: string = ''): Observable<any> {
        const url = environment.api_url + 'inquiry/inquiry/list';
        let httpHeaders = new HttpHeaders({
           
            'Authorization': 'User PBT24RIFM16VGTHRT6PSRTBQIN4AGT78Y456455GR3FU8778FGH8TYDU4648534FV75',
        });
        const postData = id ? { id: id } : {};
        return this.http.post(url, postData,  { headers: httpHeaders });
      }

    


}