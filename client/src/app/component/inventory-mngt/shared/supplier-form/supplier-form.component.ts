import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthLoginService } from 'src/app/shared/auth.service';
import { MessageService } from 'primeng/api';
import { SuppierService } from 'src/app/shared/suppier.service';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Supplier } from 'src/app/model/supplier.model';

import * as _ from 'lodash';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.scss']
})
export class SupplierFormComponent implements OnInit {
 
  @Input() displayDialog: boolean;
  @Input() supplierData: any;
  @Output() displayChangeEvent = new EventEmitter();
  @Output() supplierEvent = new EventEmitter()
  supplierForm:FormGroup
  status:any = [];
  supplierList: any = []

  constructor(private _fb:FormBuilder, private auth: AuthLoginService, private messageService: MessageService,private supplierService:SuppierService,private commonService:CommonService,
    public sessionService : SessionService
    ) {
 
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
     
  }

  ngOnInit() {  
  }

  ngOnChanges() {
    console.log('displayDialog',this.displayDialog);
    console.log('isObjectsupplierData',_.isPlainObject(this.supplierData))
    if(_.isPlainObject(this.supplierData)){      
    console.log('supplierData',this.supplierData);   
    this.supplierForm.controls['_id'].setValue(this.supplierData._id);
    this.supplierForm.controls['company_details_id'].setValue(this.supplierData.company_details_id._id);
    this.supplierForm.controls['supplier_code'].setValue(this.supplierData.supplier_code);
    this.supplierForm.controls['supplier_name'].setValue(this.supplierData.supplier_name);
    this.supplierForm.controls['supplier_address'].setValue(this.supplierData.supplier_address);
    this.supplierForm.controls['phone'].setValue(this.supplierData.phone);
    this.supplierForm.controls['status'].setValue(this.supplierData.status);     
    }else{      
    this.getSupplierByCompany();
    }
  }

  @ViewChild("placesRef",{static:false}) placesRef : GooglePlaceDirective;
    
  public handleAddressChange(address: Address) {
    console.log('address',address);
  // Do some stuff
  this.supplierForm.controls['supplier_address'].setValue(address.formatted_address);
}


    getSupplierByCompany(){
      this.supplierService.getSupplierByCompany()
      .subscribe((data:any)=>{
        console.log('supplierList',data);
        this.supplierList = data;
        this.supplierForm.reset();  
        this.supplierForm.controls['supplier_code'].setValue(this.commonService.incrCode('s',data.length));
        this.supplierForm.controls['status'].setValue(1);
        this.supplierForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
        // this.displayDialog = true;
      })
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



  onRowAdd(supplier) {
    console.log('onRowAdd',supplier);
   
          // this.cars.push(newcar); 
          this.supplierService.addSupplier(supplier)
          .subscribe((data:any)=>{
            console.log('add customer',data);
          
            this.supplierEvent.emit(data)
            this.messageService.add({severity:'success', summary:'Supplier Added Successfully', detail:'Supplier Added Successfully'});
            this.displayDialog = false;
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
      this.supplierEvent.emit(data)
      this.messageService.add({severity:'success', summary:'Supplier Updated Successfully', detail:'Supplier Updated Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }

   
  onClose(){
    // this.displayDialog = false;
    this.displayChangeEvent.emit(false)
  }

    // Work against memory leak if component is destroyed
    ngOnDestroy() {
      this.displayChangeEvent.unsubscribe();
    }


}