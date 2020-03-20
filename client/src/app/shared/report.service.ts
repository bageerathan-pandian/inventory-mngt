import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './session.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient:HttpClient,private sessionService: SessionService) { }

  

  getSalesReportByCompany(from_date, to_date){
    let data = {
      company_id: this.sessionService.getItem('company_id'),
      from_date: from_date,
      to_date:to_date
    }
    let body = JSON.stringify(data);
    let httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
    return this.httpClient.post(environment.api_url + '/api/report/get-sales-report',body,{headers:httpHeaders});
  }
}
