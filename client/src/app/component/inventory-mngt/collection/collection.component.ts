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
import { PrintService } from 'src/app/shared/print.service';
import { CollectionService } from 'src/app/shared/collection.service';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/model/customer.model';
import { SuppierService } from 'src/app/shared/suppier.service';
import { Supplier } from 'src/app/model/supplier.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  loading: boolean;
  loading1: boolean;
  public bradCrum: MenuItem[];
  displayDialogCustomer: boolean;
  display: boolean
  collectionForm: FormGroup
  cols: any[];
  scols: any[]
  ccols: any[]
  status: any = [];
  customerList: Customer[];
  supplierList: Supplier[];
  data: any;
  customerListDropdown: any = []
  paymentTypes: any
  showData: any
  invoiceData: any
  today: any = new Date()
  collectionList: any = []

  constructor(private router: Router, private _fb: FormBuilder, private confirmationService: ConfirmationService, private messageService: MessageService, private customerService: CustomerService, private commonService: CommonService,
    public sessionService: SessionService, private collectionService: CollectionService, private printService: PrintService, private supplierService: SuppierService
  ) {
    this.bradCrum = [
      {
        label: '', icon: 'pi pi-home', command: (event) => {
          this.router.navigate(['/inventory-mngt/dashboard'])
        }
      },
      { label: 'Collection' },
    ];
    this.collectionForm = this._fb.group({
      _id: [''],
      collection_code: ['', Validators.required],
      company_details_id: [this.sessionService.getItem('company_id'), Validators.required],
      customer_details_id: ['', Validators.required],
      total_purchase_amt: [null, Validators.required],
      total_paid_amt: [null, Validators.required],
      collection_amt: [null, Validators.required],
      collection_date: [null, Validators.required],
      total_pending_amt: [, Validators.required],
      status: [1, Validators.required]
    })

    this.cols = [
      // { field: '_id', header: '#' },
      { field: 'customer_code', header: 'Code' },
      { field: 'customer_name', header: 'Customer Name' },
      { field: 'customer_address', header: 'Customer Address' },
      { field: 'total_purchase_amt', header: 'Total Purchase Amt' },
      { field: 'total_paid_amt', header: 'Total Paid Amt' },
      { field: 'total_pending_amt', header: 'Total Pending Amt' },
      { field: 'updatedAt', header: 'Updated Date' },
      { field: 'status', header: 'Status' }
      // { field: '', header: 'Action' }
    ];

    this.scols = [
      // { field: '_id', header: '#' },
      { field: 'supplier_code', header: 'Code' },
      { field: 'supplier_name', header: 'Supplier Name' },
      { field: 'supplier_address', header: 'Supplier Address' },
      { field: 'total_purchase_amt', header: 'Total Purchase Amt' },
      { field: 'total_paid_amt', header: 'Total Paid Amt' },
      { field: 'total_pending_amt', header: 'Total Pending Amt' },
      { field: 'updatedAt', header: 'Updated Date' },
      { field: 'status', header: 'Status' }
      // { field: '', header: 'Action' }
    ];
    
    this.ccols = [
      // { field: '_id', header: '#' },
      { field: 'collection_code', header: 'Code' },
      { field: 'collection_date', header: 'Collection Date' },
      { field: 'collection_amt', header: 'Collection Amt' },
      { field: 'updatedAt', header: 'Updated Date' },
      // { field: 'status', header: 'Status' }
      // { field: '', header: 'Action' }
    ];


  }

  ngOnInit() {

    this.getCustomerCollectionByCompany();
    this.getTotalCustomerCollectionByCompany()
  }


  getCustomerCollectionByCompany() {
    this.loading = true
    this.customerService.getCustomerByCompany()
      .subscribe((data: any) => {
        console.log('customerList', data);
        this.customerList = data.filter(x => x.total_purchase_amt != null);
        this.customerListDropdown = []
        this.customerList.forEach(custData => {
          let listCust = {
            label: custData.customer_name + ' | ' + custData.customer_code,
            value: custData._id
          }
          this.customerListDropdown.push(listCust)
        })
        this.loading = false;
      })
  }


  getSupplierCollectionByCompany() {
    this.loading = true
    this.supplierService.getSupplierByCompany()
      .subscribe((data: any) => {
        console.log('supplierList', data);
        this.supplierList = data;
        this.loading = false;
      })
  }

  getTotalCustomerCollectionByCompany() {
    this.loading = true
    this.collectionService.getTotalCustomerCollectionByCompany()
      .subscribe((data: any) => {
        console.log('collectioList', data);
        this.collectionForm.reset();
        this.collectionForm.controls['collection_code'].setValue(this.commonService.incrCode('c', data.length));
        this.collectionForm.controls['status'].setValue(1);
        this.collectionForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
        this.loading = false;
      })
  }

  onSelectCust(event) {
    let selectedCustData = _.find(this.customerList, { '_id': event.value })
    this.collectionForm.controls['total_purchase_amt'].setValue(selectedCustData.total_purchase_amt);
    this.collectionForm.controls['total_paid_amt'].setValue(selectedCustData.total_paid_amt);
    this.collectionForm.controls['total_pending_amt'].setValue(selectedCustData.total_pending_amt);
  }


  public checkValidity(): void {
    Object.keys(this.collectionForm.controls).forEach((key) => {
      this.collectionForm.controls[key].markAsDirty();
    });
  }

  save() {
    if (this.collectionForm.invalid) {
      this.checkValidity()
      return false;
    }
    this.collectionService.addCustomerCollection(this.collectionForm.value)
      .subscribe((data: any) => {
        console.log('add customer', data);
        this.messageService.add({ severity: 'success', summary: 'Customer Collection Added Successfully', detail: 'Customer Collection Added Successfully' });
        this.displayDialogCustomer = false;
        this.getTotalCustomerCollectionByCompany()
        this.getCustomerCollectionByCompany();
      },
        error => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });
          this.displayDialogCustomer = false;

        })

  }

  showDialogToAdd() {
    this.displayDialogCustomer = true
  }


  handleChange(event) {
    console.log(event);
    if (event.index == 0) {
      this.getCustomerCollectionByCompany()
    } else {
      this.getSupplierCollectionByCompany()
    }
  }

  viewData(data) {
    this.showData = data
    this.getCustomerCollectionByCompanyById(data._id)
    this.display = true
  }

  getCustomerCollectionByCompanyById(id) {
    this.loading1 = true
    this.collectionService.getTotalCustomerCollectionById(id)
      .subscribe((data: any) => {
        console.log('collectioListbyId', data);
        this.collectionList = data
          this.loading1 = false;
      })
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



}
