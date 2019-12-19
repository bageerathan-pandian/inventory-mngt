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
import { AuthService } from 'src/app/shared/auth.service';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.scss'],
  providers: [ConfirmationService]
})
export class CustomerMasterComponent implements OnInit {


  loding: boolean = true;
  public bradCrum: MenuItem[];
  displayDialog: boolean;
  customerForm:FormGroup
  car: any = {};
  cols: any[];
  status:any = [];
  customerList: Customer[];
  clonedCars: { [s: string]: Customer } = {};
  data:any;
  constructor(private router:Router,private _fb: FormBuilder, private auth:AuthService, private confirmationService: ConfirmationService,private messageService: MessageService,private customerService:CustomerService,private commonService: CommonService,
    public sessionService: SessionService
    ) {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {label:'Master',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard']);
    }},
      {label:'Customer'},
  ];
    this.status = [
      {label:'Active', value:1},
      {label:'De-Active', value:0},
    ]
    this.customerForm = this._fb.group({
      _id: [''],
      company_details_id: ['',Validators.required],
      customer_code: ['',Validators.required],
      customer_name: ['',Validators.required],
      customer_address: ['',Validators.required],
      phone: ['',Validators.required],
      status: [1,Validators.required]
    })
    
    this.cols = [
      // { field: '_id', header: '#' },
      { field: 'customer_code', header: 'Code' },
      { field: 'customer_name', header: 'Customer Name' },
      { field: 'customer_address', header: 'Customer Address' },
      { field: 'phone', header: 'Phone' },
      { field: 'updatedAt', header: 'Updated Date' },
      { field: 'status', header: 'Status' }
      // { field: '', header: 'Action' }
  ];
   
  }

  ngOnInit() {

    // this.getCustomer();
    this.getCustomerByCompany(this.sessionService.getItem('company_id'));
  }

  @ViewChild("placesRef",{static:false}) placesRef : GooglePlaceDirective;
    
  public handleAddressChange(address: Address) {
    console.log('address',address);
  // Do some stuff
  this.customerForm.controls['customer_address'].setValue(address.formatted_address);
}

    getCustomer(){

      this.customerService.getCustomer()
      .subscribe((data:any)=>{
        console.log('customerList',data);
        this.customerList = data;
        this.loding =false;
      })
    }

    getCustomerByCompany(id){

      this.customerService.getCustomerByCompany(id)
      .subscribe((data:any)=>{
        console.log('customerList',data);
        this.customerList = data;
        this.loding =false;
      })
    }

  showDialogToAdd() {
    this.customerForm.reset();
    this.customerForm.controls['customer_code'].setValue(this.commonService.incrCode('c',this.customerList.length));
    this.customerForm.controls['status'].setValue(1);
    this.customerForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
    this.displayDialog = true;
  }

  public checkValidity(): void {
    Object.keys(this.customerForm.controls).forEach((key) => {
        this.customerForm.controls[key].markAsDirty();
    });
  }

  save() {
    if(this.customerForm.invalid){
      this.checkValidity()
      return false;
    }
    console.log('data',this.customerForm.value);
    if(this.customerForm.value._id){
      this.onRowUpdate(this.customerForm.value);
    }else{      
      this.onRowAdd(this.customerForm.value);
    }
  }

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

  onRowAdd(customer) {
    console.log('onRowAdd',customer);
    // this.cars.push(newcar); 
    this.customerService.addCustomer(customer)
    .subscribe((data:any)=>{
      console.log('add customer',data);
      this.customerList = [ data,...this.customerList];
    
      console.log('this.customerList',this.customerList);
      this.messageService.add({severity:'success', summary:'Customer Added Successfully', detail:'Customer Added Successfully'});
      this.displayDialog = false;
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }
  
  onRowEdit(customer: Customer) {
    console.log(customer);
    this.displayDialog = true;
    this.customerForm.controls['_id'].setValue(customer._id);
    this.customerForm.controls['company_details_id'].setValue(customer.company_details_id._id);
    this.customerForm.controls['customer_code'].setValue(customer.customer_code);
    this.customerForm.controls['customer_name'].setValue(customer.customer_name);
     this.customerForm.controls['customer_address'].setValue(customer.customer_address);
     this.customerForm.controls['phone'].setValue(customer.phone);
     this.customerForm.controls['status'].setValue(customer.status);
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

  onRowUpdate(customer) {
    console.log(customer);
    this.displayDialog = false;
    customer.customer_address = (this.customerForm.value.customer_address) ? this.customerForm.value.customer_address : customer.customer_address;
    this.customerService.updateCustomer(customer)
    .subscribe((data:any)=>{
      console.log('update',data);
      var sliceIndex = _.findIndex(this.customerList, function (o) { return o._id == customer._id; });
      console.log(sliceIndex);
      if (sliceIndex > -1) {
        // Replace item at index using native splice
        this.customerList.splice(sliceIndex, 1, data);
      }
      this.customerList = [...this.customerList];
      this.messageService.add({severity:'success', summary:'Customer Updated Successfully', detail:'Customer Updated Successfully'});
  
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


}

