import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UnitService } from 'src/app/shared/unit.service';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.scss']
})
export class UnitFormComponent implements OnInit {

 
  @Input() displayDialog2: boolean
  
  @Output() displayChangeEvent2 = new EventEmitter();

  unitForm:FormGroup

  constructor(private _fb: FormBuilder, private unitService:UnitService,private commonService: CommonService,
    public sessionService: SessionService
    ) {
 

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

  }

  addUnit(){
    console.log('unitForm',this.unitForm);
    // if(this.unitForm.invalid){      
    //   this.checkValidityUnit()
    //   return
    // }

      this.unitService.addUnit(this.unitForm.value)
      .subscribe((data:any)=>{
        console.log('add unit',data);
        let newData = {
          label : data.unit_name +' | ' +data.unit_code,
          value : data._id
         }
        // this.unitList = [newData,...this.unitList];
        // this.categoryList.push(data);
        // console.log('this.unitList',this.unitList);
        // this.messageService.add({severity:'success', summary:'New Unit Added Successfully', detail:'New Unit Added Successfully'});
        // this.stockForm.controls['unit_details_id'].setValue(data._id) 
        // this.displayDialog2 = false;
      },
      error =>{
        console.log(error);
        // this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
        // this.displayDialog2 = false;
  
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
