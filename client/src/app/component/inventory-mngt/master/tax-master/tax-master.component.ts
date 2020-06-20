import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tax } from 'src/app/model/tax.model';
import { Router } from '@angular/router';
import { TaxService } from 'src/app/shared/tax.service';

import * as _ from 'lodash';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-tax-master',
  templateUrl: './tax-master.component.html',
  styleUrls: ['./tax-master.component.scss'],
  providers: [ConfirmationService]
})
export class TaxMasterComponent implements OnInit {

 
  loading: boolean;
  public bradCrum: MenuItem[];
  taxList: Tax[];
  taxForm: FormGroup
  displayDialog: boolean;
  car: any = {};  
  status:any = [];
  constructor(private router:Router,private _fb: FormBuilder, private confirmationService: ConfirmationService,private messageService: MessageService,private taxService:TaxService,private commonService: CommonService,
    public sessionService: SessionService
    ) {
  }

  ngOnInit() {
    
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {
        label: "Master",
        command: event => {
          this.router.navigate(["/inventory-mngt/master"]);
        }
      },
      {
        label: "Tax",
        command: event => {
          this.router.navigate(["/inventory-mngt/master/tax"]);
        }
      }
    ];
    this.status = [
      {label:'Active', value:1},
      {label:'De-Active', value:0},
    ]
    
    this.taxForm = this._fb.group({
      _id: [''],
      company_details_id: ['',Validators.required],
      tax_code: ['',Validators.required],
      tax_name: ['',Validators.required],
      tax_value: ['',Validators.required],
      status: [1,Validators.required]
    })
   
    // if(this.user_details.role == '0'){
    //   this.getTax();
    // }else{
      this.getTaxByCompany();
    // }
  }

  getTax(){
    this.loading =true
    this.taxService.getTax()
    .subscribe((data:any)=>{
      console.log('taxList',data);
      this.taxList = data;
      this.loading = false;
    })
  }

  getTaxByCompany(){
    this.loading = true
    this.taxService.getTaxByCompany()
    .subscribe((data:any)=>{
      console.log('taxList',data);
      this.taxList = data;
      this.loading = false;
    })
  }

 
  showDialogToAdd() {
    this.taxForm.reset();
    this.taxForm.controls['tax_code'].setValue(this.commonService.incrCode('t',this.taxList.length));
    this.taxForm.controls['status'].setValue(1);
    this.taxForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
    this.displayDialog = true;
  }

  public checkValidity(): void {
    Object.keys(this.taxForm.controls).forEach((key) => {
        this.taxForm.controls[key].markAsDirty();
    });
  }

  save() {
    if(this.taxForm.invalid){
      this.checkValidity()
      return false;
    }
    if(this.taxForm.value._id){
      this.onRowUpdate(this.taxForm.value);
    }else{      
      this.onRowAdd(this.taxForm.value);
    }
  }

  delete(data,index){
    console.log('delete',data,index);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this Tax?',
      accept: () => {
          //Actual logic to perform a confirmation
          this.onRowDelete(data,index);
      }
  });
  }

  onRowAdd(Tax) {
    console.log('onRowAdd',Tax);
           // this.cars.push(newcar); 
        this.taxService.addTax(Tax)
        .subscribe((data:any)=>{
          console.log('add cat',data);
          this.taxList = [data,...this.taxList];
        
          console.log('this.taxList',this.taxList);
          this.messageService.add({severity:'success', summary:'Tax Added Successfully', detail:'Tax Added Successfully'});
          this.displayDialog = false;
        },
        error =>{
          console.log(error);
          this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
    
        })
  }
  
  onRowEdit(tax: Tax) {
    console.log(tax);
    this.displayDialog = true;
    this.taxForm.controls['_id'].setValue(tax._id);
    this.taxForm.controls['tax_name'].setValue(tax.tax_name);
    this.taxForm.controls['tax_value'].setValue(tax.tax_value);
    this.taxForm.controls['status'].setValue(tax.status);
  }

  onRowDelete(tax,index) {
    console.log(tax,index);
     this.taxService.deleteTax(tax._id)
    .subscribe((data:any)=>{
      console.log('delete',data);
      this.taxList.splice(index, 1);
      this.taxList = [...this.taxList];
      this.messageService.add({severity:'success', summary:'Tax Deleted Successfully', detail:'Tax Deleted Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }

  onRowUpdate(Tax) {
    console.log('onRowUpdate',Tax);
    this.displayDialog = false;
  
    this.taxService.updateTax(Tax)
    .subscribe((data:any)=>{
      console.log('update',data);
      var sliceIndex = _.findIndex(this.taxList, function (o) { return o._id == Tax._id; });
      console.log(sliceIndex);
      if (sliceIndex > -1) {
        // Replace item at index using native splice
        this.taxList.splice(sliceIndex, 1, data);
      }
      this.taxList = [...this.taxList];
      this.messageService.add({severity:'success', summary:'Tax Updated Successfully', detail:'Tax Updated Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }

  onChangeStatus(event,id){
    console.log(event);
    let isChecked = event.checked;
    this.taxService.updateStatus(event.checked,id)
    .subscribe((data:any)=>{
      this.messageService.add({severity:'success', summary:'Status Updated Successfully', detail:'Status Updated Successfully'});
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'}); 

    })
  }
  
}
