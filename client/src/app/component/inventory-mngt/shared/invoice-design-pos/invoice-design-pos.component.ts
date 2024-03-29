import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from 'src/app/shared/session.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-invoice-design-pos',
  templateUrl: './invoice-design-pos.component.html',
  styleUrls: ['./invoice-design-pos.component.scss']
})
export class InvoiceDesignPosComponent implements OnInit {

  company_image:any
  @Input() invoiceData: any

  constructor(public sessionService:SessionService) {
    this.company_image = this.sessionService.getItem('company_image') ? environment.api_url + this.sessionService.getItem('company_image') : null;
   }

  ngOnInit() {
   
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

}
