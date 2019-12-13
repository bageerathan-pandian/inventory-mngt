import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

 
  constructor(private httpClient:HttpClient) { }

  imageUpload(data: File){
    let formData = new FormData();
    formData.append("image", data, data.name);
    console.log('body',formData);
    // var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/image-upload',formData);
  }

  profileImageUpload(data: File){
    let formData = new FormData();
    formData.append("image", data, data.name);
    console.log('body',formData);
    // var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/image-upload/profile',formData);
  }

  companyLogoUpload(data: File){
    let formData = new FormData();
    formData.append("image", data, data.name);
    console.log('body',formData);
    // var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/image-upload/logo',formData);
  }
 
}
