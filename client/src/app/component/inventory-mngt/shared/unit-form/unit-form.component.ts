import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UnitService } from 'src/app/shared/unit.service';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.scss']
})
export class UnitFormComponent implements OnInit {

 
  @Input() displayDialog2: boolean
  
  @Output() displayChangeEvent2 = new EventEmitter();
  @Output() unitEvent = new EventEmitter();

  unitForm:FormGroup
  status:any

  constructor(private _fb: FormBuilder, private unitService:UnitService,private commonService: CommonService,
    public sessionService: SessionService, private messageService: MessageService
    ) {
 
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
  }

  ngOnInit() {
  }

  
  ngOnChanges() {
    console.log('displayDialog2',this.displayDialog2);
    this.getUnitByCompany()

  }

  getUnitByCompany(){
    this.unitService.getUnitByCompany()
    .subscribe((data:any)=>{
      console.log('unitList',data);  
        this.unitForm.reset();
        this.unitForm.controls['unit_code'].setValue(this.commonService.incrCode('u',data.length));
        this.unitForm.controls['status'].setValue(1);
        this.unitForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))       
    })
  }

  public checkValidity(): void {
    Object.keys(this.unitForm.controls).forEach((key) => {
        this.unitForm.controls[key].markAsDirty();
    });
  }


  addUnit(){
    console.log('unitForm',this.unitForm);
    if(this.unitForm.invalid){      
      this.checkValidity()
      return
    }

      this.unitService.addUnit(this.unitForm.value)
      .subscribe((data:any)=>{
        console.log('add unit',data);
        let newData = {
          label : data.unit_name +' | ' +data.unit_code,
          value : data._id
         }
         this.unitEvent.emit(newData)
        // this.unitList = [newData,...this.unitList];
        // this.categoryList.push(data);
        // console.log('this.unitList',this.unitList);
        this.messageService.add({severity:'success', summary:'New Unit Added Successfully', detail:'New Unit Added Successfully'});
        // this.stockForm.controls['unit_details_id'].setValue(data._id) 
        this.displayDialog2 = false;
      },
      error =>{
        console.log(error);
        this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
        this.displayDialog2 = false;
  
      })
  }
  
  onClose(){
    // this.displayDialog = false;
    this.displayChangeEvent2.emit(false)
  }

    // Work against memory leak if component is destroyed
    ngOnDestroy() {
      this.displayChangeEvent2.unsubscribe();
    }


}
