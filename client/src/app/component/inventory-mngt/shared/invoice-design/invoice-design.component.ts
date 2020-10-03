import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from 'src/app/shared/session.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from 'src/app/shared/print.service';

@Component({
  selector: 'app-invoice-design',
  templateUrl: './invoice-design.component.html',
  styleUrls: ['./invoice-design.component.scss']
})
export class InvoiceDesignComponent implements OnInit {

  company_image: any
  @Input() invoiceData: any
  invoiceIds: any

  constructor(public sessionService: SessionService, route: ActivatedRoute,
    private printService: PrintService) {
    this.company_image = this.sessionService.getItem('company_image') ? environment.api_url + this.sessionService.getItem('company_image') : null;
    // this.invoiceIds = route.snapshot.params['invoiceIds']
    // .split(','); 
  }

  ngOnInit() {
    console.log('inovce-design')



  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // this.printService.onDataReady()

  }

}
