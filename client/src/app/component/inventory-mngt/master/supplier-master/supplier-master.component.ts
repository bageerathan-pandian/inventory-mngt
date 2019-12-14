import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "src/app/model/user.model";
import {MenuItem} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { Supplier } from 'src/app/model/supplier.model';
import { SuppierService } from 'src/app/shared/suppier.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-supplier-master',
  templateUrl: './supplier-master.component.html',
  styleUrls: ['./supplier-master.component.scss'],
  providers: [ConfirmationService]
})
export class SupplierMasterComponent implements OnInit {

  loding: boolean = true;
  public bradCrum: MenuItem[];
  displayDialog: boolean;
  supplierForm:FormGroup
  car: any = {};
  cols: any[];
  status:any = [];
  supplierList: Supplier[];
  clonedCars: { [s: string]: User } = {};

  constructor(private router:Router,private _fb:FormBuilder, private auth: AuthService, private confirmationService: ConfirmationService,private messageService: MessageService,private supplierService:SuppierService,private commonService:CommonService) {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {label:'Master',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard']);
    }},
      {label:'Suppliers'},
  ];
  this.status = [
    {label:'Active', value:1},
    {label:'De-Active', value:0},
  ]
  this.supplierForm = this._fb.group({
    _id: [''],
    company_details_id: ['',Validators.required],
    supplier_code: ['',Validators.required],
    supplier_name: ['',Validators.required],
    supplier_address: ['',Validators.required],
    phone: ['',Validators.required],
    status: [1,Validators.required]
  })
     
  this.cols = [
    // { field: '_id', header: '#' },
    { field: 'supplier_code', header: 'Code' },
    { field: 'supplier_name', header: 'Supplier Name' },
    { field: 'phone_address', header: 'Supplier Address' },
    { field: 'phone', header: 'Phone' },
    { field: 'updatedAt', header: 'Updated Date' },
    { field: 'status', header: 'Status' }
    // { field: '', header: 'Action' }
];
  }

  ngOnInit() {  
    // this.getSupplier();
    this.getSupplierByCompany(this.auth.getUserCompanyId());
  }

  @ViewChild("placesRef",{static:false}) placesRef : GooglePlaceDirective;
    
  public handleAddressChange(address: Address) {
    console.log('address',address);
  // Do some stuff
  this.supplierForm.controls['supplier_address'].setValue(address.formatted_address);
}

  getSupplier(){
    this.supplierService.getSupplier()
    .subscribe((data:any)=>{
      console.log('supplierList',data);
      this.supplierList = data;
      this.loding = false;
    })
    }

    getSupplierByCompany(id){
      this.supplierService.getSupplierByCompany(id)
      .subscribe((data:any)=>{
        console.log('supplierList',data);
        this.supplierList = data;
        this.loding = false;
      })
      }

  showDialogToAdd() {    
    this.supplierForm.reset();  
    this.supplierForm.controls['supplier_code'].setValue(this.commonService.incrCode('s',this.supplierList.length));
    this.supplierForm.controls['status'].setValue(1);
    this.supplierForm.controls['company_details_id'].setValue(this.auth.getUserData().company_details_id._id)
    this.displayDialog = true;
  }

  public checkValidity(): void {
    Object.keys(this.supplierForm.controls).forEach((key) => {
        this.supplierForm.controls[key].markAsDirty();
    });
  }

  save() {
    if(this.supplierForm.invalid){
      this.checkValidity()
      return false;
    }
    if(this.supplierForm.value._id){
      this.onRowUpdate(this.supplierForm.value);
    }else{      
      this.onRowAdd(this.supplierForm.value);
    }
  }

  delete(supplier,index){
    console.log('delete',supplier,index);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this Supplier?',
      accept: () => {
          //Actual logic to perform a confirmation
          this.onRowDelete(supplier,index);
      }
  });
  }

  onRowAdd(supplier) {
    console.log('onRowAdd',supplier);
   
          // this.cars.push(newcar); 
          this.supplierService.addSupplier(supplier)
          .subscribe((data:any)=>{
            console.log('add customer',data);
            this.supplierList = [data,...this.supplierList];
          
            console.log('this.supplierList',this.supplierList);
            this.messageService.add({severity:'success', summary:'Supplier Added Successfully', detail:'Supplier Added Successfully'});
            this.displayDialog = false;
          },
          error =>{
            console.log(error);
            this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
      
          })
  }
  
  onRowEdit(supplier: Supplier) {
    console.log(supplier);
    this.displayDialog = true;
     this.supplierForm.controls['_id'].setValue(supplier._id);
     this.supplierForm.controls['company_details_id'].setValue(supplier.company_details_id._id);
     this.supplierForm.controls['supplier_code'].setValue(supplier.supplier_code);
     this.supplierForm.controls['supplier_name'].setValue(supplier.supplier_name);
     this.supplierForm.controls['supplier_address'].setValue(supplier.supplier_address);
     this.supplierForm.controls['phone'].setValue(supplier.phone);
     this.supplierForm.controls['status'].setValue(supplier.status);
  }

  onRowDelete(supplier,index) {
    console.log(supplier,index);
    this.supplierService.deleteSupplier(supplier._id)
    .subscribe((data:any)=>{
      console.log('delete',data);
      this.supplierList.splice(index, 1);
      this.supplierList = [...this.supplierList];
      this.messageService.add({severity:'success', summary:'Supplier Deleted Successfully', detail:'Supplier Deleted Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }

  onRowUpdate(supplier) {
    console.log(supplier);
    this.displayDialog = false;
    supplier.supplier_address = (this.supplierForm.value.supplier_address) ? this.supplierForm.value.supplier_address : supplier.supplier_address;

    this.supplierService.updateSupplier(supplier)
    .subscribe((data:any)=>{
      console.log('update',data);
      var sliceIndex = _.findIndex(this.supplierList, function (o) { return o._id == supplier._id; });
      console.log(sliceIndex);
      if (sliceIndex > -1) {
        // Replace item at index using native splice
        this.supplierList.splice(sliceIndex, 1, data);
      }
      this.supplierList = [...this.supplierList];
      this.messageService.add({severity:'success', summary:'Supplier Updated Successfully', detail:'Supplier Updated Successfully'});
  
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

