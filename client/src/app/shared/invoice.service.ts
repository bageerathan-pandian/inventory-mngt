import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './session.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {


  constructor(private httpClient:HttpClient,private sessionService: SessionService) { }

  

  getInvoiceByCompany(){
    return this.httpClient.get(environment.api_url + '/api/invoice/get-by-company/'+this.sessionService.getItem('company_id'));
  }



  updateInvoice(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/invoice/'+ data._id ,body,{headers:headerOption});
  }

  
  getTotalSalesAmount(){
    return this.httpClient.get(environment.api_url + '/api/invoice/total-sales/'+this.sessionService.getItem('company_id'));
  }
  

}
