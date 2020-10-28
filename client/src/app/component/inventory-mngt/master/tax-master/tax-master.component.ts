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
  
  displayDialog3: boolean;
  taxData:any = []

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

 
  // showDialogToAdd() {
  //   this.taxForm.reset();
  //   this.taxForm.controls['tax_code'].setValue(this.commonService.incrCode('t',this.taxList.length));
  //   this.taxForm.controls['status'].setValue(1);
  //   this.taxForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
  //   this.displayDialog = true;
  // }

  
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

  showDialogToAdd(Data) {
    this.taxData = Data;
    this.displayDialog3 = true;
  }

  onDialogClose3(event){
    console.log(event)  
    this.displayDialog3 = false;
    this.taxData = null
  }

  receiveTax(event){
        
    var sliceIndex = _.findIndex(this.taxList, function (o) { return o._id == event._id; });
    console.log(sliceIndex);
    if (sliceIndex > -1) {
      // Replace item at index using native splice
      this.taxList.splice(sliceIndex, 1, event);
      this.taxList = [...this.taxList];
    }else{
      this.taxList = [event,...this.taxList];
    }
  }

  
}
