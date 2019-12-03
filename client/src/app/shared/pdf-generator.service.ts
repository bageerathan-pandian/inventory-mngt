import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  constructor(private httpClient:HttpClient) { }

  testPdg(){
    return this.httpClient.get(environment.api_url + '/api/pdf/test-pdf');
  }
}
