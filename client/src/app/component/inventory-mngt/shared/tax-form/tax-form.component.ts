import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';
import { MessageService } from 'primeng/api';
import * as _ from 'lodash';
import { TaxService } from 'src/app/shared/tax.service';

@Component({
  selector: 'app-tax-form',
  templateUrl: './tax-form.component.html',
  styleUrls: ['./tax-form.component.scss']
})
export class TaxFormComponent implements OnInit {

 
  @Input() taxData: any;
  @Input() displayDialog3: boolean
  
  @Output() displayChangeEvent3 = new EventEmitter();
  @Output() taxEvent = new EventEmitter();

  taxForm:FormGroup
  status:any
  taxTypeList:any

  constructor(private _fb: FormBuilder, private taxService:TaxService,private commonService: CommonService,
    public sessionService: SessionService, private messageService: MessageService
    ) {
 
      this.status = [
        {label:'Active', value:1},
        {label:'De-Active', value:0},
      ]
      this.taxTypeList = [
        {label:'CGST', value:1},
        {label:'SGST', value:2},
        {label:'IGST', value:3},
      ]

      this.taxForm = this._fb.group({
        _id: [''],
        company_details_id: ['',Validators.required],
        tax_code: ['',Validators.required],
        tax_name: ['',Validators.required],
        tax_value_cgst: ['',Validators.required],
        tax_value_sgst: ['',Validators.required],
        status: [1,Validators.required]
      })
  }

  ngOnInit() {
  }

  
  ngOnChanges() {
    console.log('displayDialog3',this.displayDialog3);   
    console.log('isObjectcatData',_.isPlainObject(this.taxData))
    if(_.isPlainObject(this.taxData)){      
      console.log('catData',this.taxData);   
      this.taxForm.controls['_id'].setValue(this.taxData._id);
      this.taxForm.controls['tax_code'].setValue(this.taxData.tax_code);
      this.taxForm.controls['tax_name'].setValue(this.taxData.tax_name);
      this.taxForm.controls['tax_value_cgst'].setValue(this.taxData.tax_value_cgst);
      this.taxForm.controls['tax_value_sgst'].setValue(this.taxData.tax_value_sgst);
      this.taxForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))  
      this.taxForm.controls['status'].setValue(this.taxData.status);    
      }else{           
      this.getUnitByCompany()
      }

  }

  getUnitByCompany(){
    this.taxService.getTaxByCompany()
    .subscribe((data:any)=>{
        this.taxForm.reset();
        this.taxForm.controls['tax_code'].setValue(this.commonService.incrCode('t',data.length));
        this.taxForm.controls['status'].setValue(1);
        this.taxForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))       
    })
  }

  public checkValidity(): void {
    Object.keys(this.taxForm.controls).forEach((key) => {
        this.taxForm.controls[key].markAsDirty();
    });
  }


  addTax(){
    console.log('taxForm',this.taxForm);
    if(this.taxForm.invalid){      
      this.checkValidity()
      return
    }

      this.taxService.addTax(this.taxForm.value)
      .subscribe((data:any)=>{
        // let newData = {
        //   label : data.tax_name +' | ' +data.tax_code,
        //   value : data._id
        //  }
         this.taxEvent.emit(data)
        // this.unitList = [newData,...this.unitList];
        // this.categoryList.push(data);
        // console.log('this.unitList',this.unitList);
        this.messageService.add({severity:'success', summary:'New Tax Added Successfully', detail:'New Tax Added Successfully'});
        // this.stockForm.controls['unit_details_id'].setValue(data._id) 
        this.displayDialog3 = false;
      },
      error =>{
        console.log(error);
        this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
        this.displayDialog3 = false;
  
      })
  }

  updateTax(){
    console.log('taxForm',this.taxForm);
    if(this.taxForm.invalid){      
      this.checkValidity()
      return
    }

      this.taxService.updateTax(this.taxForm.value)
      .subscribe((data:any)=>{
        console.log('add unit',data);
        // let newData = {
        //   label : data.tax_name +' | ' +data.tax_code,
        //   value : data._id
        //  }
         this.taxEvent.emit(data)
        // this.unitList = [newData,...this.unitList];
        // this.categoryList.push(data);
        // console.log('this.unitList',this.unitList);
        this.messageService.add({severity:'success', summary:'Tax Updated Successfully', detail:'Tax Updated Successfully'});
        // this.stockForm.controls['unit_details_id'].setValue(data._id) 
        this.displayDialog3 = false;
      },
      error =>{
        console.log(error);
        this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
        this.displayDialog3 = false;
  
      })
  }
  
  onClose(){
    // this.displayDialog = false;
    this.displayChangeEvent3.emit(false)
  }

    // Work against memory leak if component is destroyed
    ngOnDestroy() {
      this.displayChangeEvent3.unsubscribe();
    }


}
