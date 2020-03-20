import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem, ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Unit } from 'src/app/model/unit.model';
import { UnitService } from 'src/app/shared/unit.service';

import * as _ from 'lodash';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-unit-master',
  templateUrl: './unit-master.component.html',
  styleUrls: ['./unit-master.component.scss']
})
export class UnitMasterComponent implements OnInit {

  loading: boolean;
  public bradCrum: MenuItem[];
  unitList: Unit[];
  displayDialog2: boolean;
  car: any = {};  
  status:any = [];
  cols: any[];
  unitData: any = []
  constructor(private router:Router, private auth:AuthService, private confirmationService: ConfirmationService,private messageService: MessageService,private unitService:UnitService, private commonService: CommonService,
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
          this.router.navigate(["/inventory-mngt/dashboard"]);
        }
      },
      {
        label: "Unit",
        command: event => {
          this.router.navigate(["/inventory-mngt/master/unit"]);
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
      this.getUnitByCompany();
    // }
    this.cols = [
      // { field: '_id', header: '#' },
      { field: 'unit_code', header: 'Code' },
      { field: 'unit_name', header: 'Unit Name' },
      { field: 'updatedAt', header: 'Updated Date' },
      { field: 'status', header: 'Status' }
      // { field: '', header: 'Action' }
  ];
  }

  getUnit(){
    this.loading = true
    this.unitService.getUnit()
    .subscribe((data:any)=>{
      console.log('unitList',data);
      this.unitList = data;
      this.loading = false;
    })
  }

  getUnitByCompany(){
    this.loading = true
    this.unitService.getUnitByCompany()
    .subscribe((data:any)=>{
      console.log('unitList',data);
      this.unitList = data;
      this.loading = false;
    })
  }

  
  showDialogToAdd() {
    // this.unitForm.reset();
    // this.unitForm.controls['unit_code'].setValue(this.commonService.incrCode('u',this.unitList.length));
    // this.unitForm.controls['status'].setValue(1);
    // this.unitForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
    this.displayDialog2 = true;
  }

 
 

  delete(data,index){
    console.log('delete',data,index);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this Unit?',
      accept: () => {
          //Actual logic to perform a confirmation
          this.onRowDelete(data,index);
      }
  });
  }

  
  onRowEdit(unit: Unit) {
    console.log(unit);
    this.displayDialog2 = true;
    this.unitData = unit
    // this.unitForm.controls['_id'].setValue(unit._id);
    // this.unitForm.controls['unit_code'].setValue(unit.unit_code);
    // this.unitForm.controls['unit_name'].setValue(unit.unit_name);
    // this.unitForm.controls['status'].setValue(unit.status);
  }

  onRowDelete(tax,index) {
    console.log(tax,index);
     this.unitService.deleteUnit(tax._id)
    .subscribe((data:any)=>{
      console.log('delete',data);
      this.unitList.splice(index, 1);
      this.unitList = [...this.unitList];
      this.messageService.add({severity:'success', summary:'Unit Deleted Successfully', detail:'Unit Deleted Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }


  onChangeStatus(event,id){
    console.log(event);
    let isChecked = event.checked;
    this.unitService.updateStatus(event.checked,id)
    .subscribe((data:any)=>{
      this.messageService.add({severity:'success', summary:'Status Updated Successfully', detail:'Status Updated Successfully'});
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'}); 

    })
  }



  onDialogClose2(event){
    console.log(event)  
    this.displayDialog2 = false;
  }

  receiveUnit(event){
    console.log('receiveUnit',event) 
        
    var sliceIndex = _.findIndex(this.unitList, function (o) { return o._id == event._id; });
    console.log(sliceIndex);
    if (sliceIndex > -1) {
      // Replace item at index using native splice
      this.unitList.splice(sliceIndex, 1, event);
      this.unitList = [...this.unitList];
    }else{
      this.unitList = [event,...this.unitList];
    }
  }
  
}
