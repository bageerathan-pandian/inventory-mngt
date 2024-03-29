import { Component, OnInit } from '@angular/core';
import { Payment } from "src/app/model/payment.model";
import { MenuItem } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import * as printJS from 'print-js'
import { Invoice } from 'src/app/model/invoice.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from 'src/app/shared/session.service';
import { CommonService } from 'src/app/shared/common.service';
import { InvoiceService } from 'src/app/shared/invoice.service';
import { PrintService } from 'src/app/shared/print.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [ConfirmationService]
})
export class PaymentComponent implements OnInit {


  loading: boolean;
  public bradCrum: MenuItem[];
  displayDialog: boolean;
  display: boolean
  invoiceForm: FormGroup
  car: any = {};
  cols: any[];
  status: any = [];
  invoiceList: Invoice[];
  purchaseInvoiceList: Invoice[];
  data: any;
  paymentStatus: any
  paymentTypes: any
  showData: any
  invoiceData: any

  constructor(private router: Router, private _fb: FormBuilder, private confirmationService: ConfirmationService, private messageService: MessageService, private invoiceService: InvoiceService, private commonService: CommonService,
    public sessionService: SessionService, private printService: PrintService
  ) {
    this.bradCrum = [
      {
        label: '', icon: 'pi pi-home', command: (event) => {
          this.router.navigate(['/inventory-mngt/dashboard'])
        }
      },
      { label: 'Payment' },
    ];
    this.invoiceForm = this._fb.group({
      _id: [''],
      invoice_code: ['', Validators.required],
      sub_total: ['', Validators.required],
      discount: ['', Validators.required],
      grand_total: ['', Validators.required],
      payment_type: ['', Validators.required],
      payment_status: [1, Validators.required]
    })

    this.cols = [
      // { field: '_id', header: '#' },
      { field: 'invoice_code', header: 'Code' },
      { field: 'invoice_date', header: 'Invoice Date' },
      { field: 'sub_total', header: 'Sub Total' },
      // { field: 'discount', header: 'Discount' },
      { field: 'cgst', header: 'CGST(Amt)' },
      { field: 'sgst', header: 'SGST(Amt)' },
      { field: 'grand_total', header: 'Grand Total' },
      { field: 'payment_type', header: 'Payment Type' },
      // { field: 'updatedAt', header: 'Updated Date' },
      { field: 'payment_status', header: 'Status' },
      { field: 'tax_enable', header: 'Tax Enable' },
    ];


    this.paymentTypes = [
      { label: 'Cash', value: 1 },
      { label: 'Card', value: 2 },
    ]

    this.paymentStatus = [
      { label: 'Paid', value: 1 },
      { label: 'Pending', value: 2 },
      { label: 'Collection', value: 3 },
    ]

  }

  ngOnInit() {

    // this.getCustomer();
    this.getInvoiceByCompany();
  }


  getInvoiceByCompany() {
    this.loading = true
    this.invoiceService.getInvoiceByCompany()
      .subscribe((data: any) => {
        console.log('invoiceList', data);
        this.invoiceList = data;
        this.loading = false;
      })
  }


  getPurchaseInvoiceByCompany() {
    this.loading = true
    this.invoiceService.getPurchaseInvoiceByCompany()
      .subscribe((data: any) => {
        console.log('p-invoiceList', data);
        this.purchaseInvoiceList = data;
        this.loading = false;
      })
  }


  public checkValidity(): void {
    Object.keys(this.invoiceForm.controls).forEach((key) => {
      this.invoiceForm.controls[key].markAsDirty();
    });
  }

  save() {
    if (this.invoiceForm.invalid) {
      this.checkValidity()
      return false;
    }
    console.log('data', this.invoiceForm.value);
    this.onRowUpdate(this.invoiceForm.value);
  }



  onRowEdit(invoice: Invoice) {
    console.log(invoice);
    // this.displayDialog = true;
    // this.invoiceForm.controls['_id'].setValue(invoice._id);
    // this.invoiceForm.controls['invoice_code'].setValue(invoice.invoice_code);
    //  this.invoiceForm.controls['sub_total'].setValue(invoice.sub_total);
    //  this.invoiceForm.controls['discount'].setValue(invoice.discount);
    //  this.invoiceForm.controls['grand_total'].setValue(invoice.grand_total);
    //  this.invoiceForm.controls['payment_type'].setValue(invoice.payment_type);
    //  this.invoiceForm.controls['payment_status'].setValue(invoice.payment_status);
  }



  onRowUpdate(invoice) {
    console.log(invoice);
    this.displayDialog = false;
    this.invoiceService.updateInvoice(invoice)
      .subscribe((data: any) => {
        console.log('update', data);
        var sliceIndex = _.findIndex(this.invoiceList, function (o) { return o._id == invoice._id; });
        console.log(sliceIndex);
        if (sliceIndex > -1) {
          // Replace item at index using native splice
          this.invoiceList.splice(sliceIndex, 1, data);
        }
        this.invoiceList = [...this.invoiceList];
        this.messageService.add({ severity: 'success', summary: 'Invoice Updated Successfully', detail: 'Invoice Updated Successfully' });

      },
        error => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });

        })

  }

  onChangeStatus(event) {
    console.log(event);
    let isChecked = event.checked;
  }

  handleChange(event) {
    console.log(event);
    if (event.index == 0) {
      this.getInvoiceByCompany()
    } else {
      this.getPurchaseInvoiceByCompany()
    }
  }

  groupByTax(arr) {
    // let group = arry.reduce((r, a) => {
    //   console.log("a", a);
    //   console.log('r', r);
    //   r[a.tax_name] = [...r[a.tax_name] || [], a];
    //   return r;
    //  }, {});
    //  console.log("group", group);
    var helper = {};
    var result = arr.reduce(function (r, o) {
      var key = o.tax_name;

      if (!helper[key]) {
        helper[key] = Object.assign({}, o); // create a copy of o
        r.push(helper[key]);
      } else {
        helper[key].cgst_amt += o.cgst_amt;
        helper[key].sgst_amt += o.sgst_amt;
        helper[key].price += o.price;
      }

      return r;
    }, []);

    return result

  }

  viewData(data) {
    
    data.tax_summary = this.groupByTax(data.invoice_list)
    this.showData = data
    this.display = true
  }

  onPrintInvoice(data) {
    this.showData = data

    // this.display = false
    // const invoiceIds = ['101', '102'];
    // this.printService.printDocument('invoice', invoiceIds);
    // setTimeout(() => {
    //   // printJS('print-section', 'html',) // print invoice 
    //   printJS({
    //     printable: 'print-section',
    //     type: 'html',
    //     targetStyles: ['width'],
    //     style: ' #print-section { visibility: visible!important; } ',
    //   })
    // }, 1000);
    setTimeout(() => {
      var divToPrint = document.getElementById('print-section');
      var mywindow = window.open('', 'new div', 'height=600,width=900');
      mywindow.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
      mywindow.document.close();
      // printJS({
      //   printable: 'print-section',
      //   type: 'html',
      //   targetStyles: ['width'],
      //   style: ' #print-section { visibility: visible!important; } ',
      // })
    }, 1000);
  }

  onCancelInvoice(data) {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this Invoice?',
      accept: () => {
        //Actual logic to perform a confirmation
        // this.onRowDelete(data,index);
      }
    });
  }

  


}
