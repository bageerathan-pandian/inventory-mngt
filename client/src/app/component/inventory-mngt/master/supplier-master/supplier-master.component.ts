import { Component, OnInit, ViewChild } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { Supplier } from 'src/app/model/supplier.model';
import { SuppierService } from 'src/app/shared/suppier.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-supplier-master',
  templateUrl: './supplier-master.component.html',
  styleUrls: ['./supplier-master.component.scss'],
  providers: [ConfirmationService]
})
export class SupplierMasterComponent implements OnInit {

  loading: boolean;
  public bradCrum: MenuItem[];
  displayDialog: boolean = false;
  car: any = {};
  cols: any[];
  status:any = [];
  supplierList: Supplier[];
  supplierData: any

  constructor(private router:Router, private confirmationService: ConfirmationService,private messageService: MessageService,private supplierService:SuppierService,private commonService:CommonService,
    public sessionService : SessionService
    ) {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {label:'Master',command: (event) => {
        this.router.navigate(["/inventory-mngt/master"]);
    }},
      {label:'Suppliers'},
  ];
  this.status = [
    {label:'Active', value:1},
    {label:'De-Active', value:0},
  ]

     
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
    this.getSupplierByCompany();
  }


    getSupplierByCompany(){
      this.loading =true
      this.supplierService.getSupplierByCompany()
      .subscribe((data:any)=>{
        console.log('supplierList',data);
        this.supplierList = data;
        this.loading = false;
      })
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

  onRowDelete(supplier,index) {
    console.log(supplier,index);
    this.supplierService.deleteSupplier(supplier._id)
    .subscribe((data:any)=>{
      console.log('delete',data);
      this.messageService.add({severity:'success', summary:'Supplier Deleted Successfully', detail:'Supplier Deleted Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }

  receiveSupplier(event){
    console.log(event)    
    var sliceIndex = _.findIndex(this.supplierList, function (o) { return o._id == event._id; });
     console.log(sliceIndex);
     if (sliceIndex > -1) {
       // Replace item at index using native splice
       this.supplierList.splice(sliceIndex, 1, event);
       this.supplierList = [...this.supplierList];
     }else{       
        this.supplierList = [event,...this.supplierList];
     }
  }

  onDialogClose(event){
    console.log(event)  
    this.displayDialog = false;
  }
  
  showDialogToAdd(supplierData){
    this.supplierData = supplierData;
    this.displayDialog = true;
  }

 
  onChangeStatus(event){
    console.log(event);
    let isChecked = event.checked;
  }

}

