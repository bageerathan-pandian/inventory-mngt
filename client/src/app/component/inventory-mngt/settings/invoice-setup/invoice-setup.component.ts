import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-invoice-setup',
  templateUrl: './invoice-setup.component.html',
  styleUrls: ['./invoice-setup.component.scss']
})
export class InvoiceSetupComponent implements OnInit {

  posInvoice:any;
  Invoice:any
  constructor(private sessionService: SessionService) {
    this.posInvoice = this.sessionService.getItem('api_url') + '/static/templates/invoice-template/invoice-design-pos.html'
    this.Invoice = this.sessionService.getItem('api_url') + '/static/templates/invoice-template/invoice-design.html'
   }

  ngOnInit() {
  }

}
