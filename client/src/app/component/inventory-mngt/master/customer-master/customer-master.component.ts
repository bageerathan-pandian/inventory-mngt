import { Component, OnInit, ViewChild } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/shared/customer.service';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.scss'],
  providers: [ConfirmationService]
})
export class CustomerMasterComponent implements OnInit {


  loading: boolean;
  public bradCrum: MenuItem[];
  displayDialog3: boolean;
  car: any = {};
  cols: any[];
  status:any = [];
  customerList: Customer[];
  data:any;
  custData:any = []
  constructor(private router:Router,private confirmationService: ConfirmationService,private messageService: MessageService,private customerService:CustomerService,private commonService: CommonService,
    public sessionService: SessionService
    ) {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {label:'Master',command: (event) => {
        this.router.navigate(["/inventory-mngt/master"]);
    }},
      {label:'Customer'},
  ];
    this.status = [
      {label:'Active', value:1},
      {label:'De-Active', value:0},
    ]
     
    this.cols = [
      // { field: '_id', header: '#' },
      { field: 'customer_code', header: 'Code' },
      { field: 'customer_name', header: 'Customer Name' },
      { field: 'customer_address', header: 'Customer Address' },
      { field: 'phone', header: 'Phone' },
      { field: 'enable_tax', header: 'Enable Tax' },
      { field: 'customer_gstin', header: 'GSTIN' },
      { field: 'route_name', header: 'Route' },
      { field: 'updatedAt', header: 'Updated Date' },
      { field: 'status', header: 'Status' }
      // { field: '', header: 'Action' }
  ];
   
  }

  ngOnInit() {

    // this.getCustomer();
    this.getCustomerByCompany();
  }


    getCustomer(){
      this.loading = true
      this.customerService.getCustomer()
      .subscribe((data:any)=>{
        console.log('customerList',data);
        this.customerList = data;
        this.loading =false;
      })
    }

    getCustomerByCompany(){
      this.loading = true
      this.customerService.getCustomerByCompany()
      .subscribe((data:any)=>{
        console.log('customerList',data);
        this.customerList = data;
        this.loading =false;
      })
    }

  // showDialogToAdd() {
  //   this.customerForm.reset();
  //   this.customerForm.controls['customer_code'].setValue(this.commonService.incrCode('c',this.customerList.length));
  //   this.customerForm.controls['status'].setValue(1);
  //   this.customerForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
  //   this.displayDialog3 = true;
  // }

 

  delete(customer,index){
    console.log('delete',customer,index);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this customer?',
      accept: () => {
          //Actual logic to perform a confirmation
          this.onRowDelete(customer,index);
      }
  });
  }

  

  onRowDelete(customer,index) {
    console.log(customer,index);
    this.customerService.deleteCustomer(customer._id)
    .subscribe((data:any)=>{
      console.log('delete',data);
      this.customerList.splice(index, 1);
      this.customerList = [...this.customerList];
      this.messageService.add({severity:'success', summary:'Customer Deleted Successfully', detail:'Customer Deleted Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }


  onChangeStatus(event){
    console.log(event);
    let isChecked = event.checked;
  }

  

  showDialogToAdd(Data) {
    this.custData = Data;
    this.displayDialog3 = true;
  }

  onDialogClose3(event){
    console.log(event)  
    this.displayDialog3 = false;
    this.custData = null
  }

  receiveCustomer(event){
    console.log('receiveUnit',event) 
        
    var sliceIndex = _.findIndex(this.customerList, function (o) { return o._id == event._id; });
    console.log(sliceIndex);
    if (sliceIndex > -1) {
      // Replace item at index using native splice
      this.customerList.splice(sliceIndex, 1, event);
      this.customerList = [...this.customerList];
    }else{
      this.customerList = [event,...this.customerList];
    }
  }
  


}

