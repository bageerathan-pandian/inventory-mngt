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

  loding: boolean = true;
  public bradCrum: MenuItem[];
  unitList: Unit[];
  unitForm: FormGroup
  displayDialog: boolean;
  car: any = {};  
  status:any = [];
  cols: any[];
  constructor(private router:Router,private _fb: FormBuilder, private auth:AuthService, private confirmationService: ConfirmationService,private messageService: MessageService,private unitService:UnitService, private commonService: CommonService,
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
    
    this.unitForm = this._fb.group({
      _id: [''],
      company_details_id: ['',Validators.required],
      unit_code: ['',Validators.required],
      unit_name: ['',Validators.required],
      status: [1,Validators.required]
    })
   
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
    this.unitService.getUnit()
    .subscribe((data:any)=>{
      console.log('unitList',data);
      this.unitList = data;
      this.loding = false;
    })
  }

  getUnitByCompany(){
    this.unitService.getUnitByCompany()
    .subscribe((data:any)=>{
      console.log('unitList',data);
      this.unitList = data;
      this.loding = false;
    })
  }

  
  showDialogToAdd() {
    this.unitForm.reset();
    this.unitForm.controls['unit_code'].setValue(this.commonService.incrCode('u',this.unitList.length));
    this.unitForm.controls['status'].setValue(1);
    this.unitForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
    this.displayDialog = true;
  }

  public checkValidity(): void {
    Object.keys(this.unitForm.controls).forEach((key) => {
        this.unitForm.controls[key].markAsDirty();
    });
  }

  save() {
    if(this.unitForm.invalid){
      this.checkValidity()
      return false;
    }
    if(this.unitForm.value._id){
      this.onRowUpdate(this.unitForm.value);
    }else{      
      this.onRowAdd(this.unitForm.value);
    }
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

  onRowAdd(Tax) {
    console.log('onRowAdd',Tax);
           // this.cars.push(newcar); 
        this.unitService.addUnit(Tax)
        .subscribe((data:any)=>{
          console.log('add cat',data);
          this.unitList = [data,...this.unitList];
        
          console.log('this.unitList',this.unitList);
          this.messageService.add({severity:'success', summary:'Unit Added Successfully', detail:'Unit Added Successfully'});
          this.displayDialog = false;
        },
        error =>{
          console.log(error);
          this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
    
        })
  }
  
  onRowEdit(unit: Unit) {
    console.log(unit);
    this.displayDialog = true;
    this.unitForm.controls['_id'].setValue(unit._id);
    this.unitForm.controls['unit_code'].setValue(unit.unit_code);
    this.unitForm.controls['unit_name'].setValue(unit.unit_name);
    this.unitForm.controls['status'].setValue(unit.status);
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

  onRowUpdate(Tax) {
    console.log('onRowUpdate',Tax);
    this.displayDialog = false;
  
    this.unitService.updateUnit(Tax)
    .subscribe((data:any)=>{
      console.log('update',data);
      var sliceIndex = _.findIndex(this.unitList, function (o) { return o._id == Tax._id; });
      console.log(sliceIndex);
      if (sliceIndex > -1) {
        // Replace item at index using native splice
        this.unitList.splice(sliceIndex, 1, data);
      }
      this.unitList = [...this.unitList];
      this.messageService.add({severity:'success', summary:'Unit Updated Successfully', detail:'Unit Updated Successfully'});
  
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
  
}
