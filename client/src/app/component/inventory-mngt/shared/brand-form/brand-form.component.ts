import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandService } from 'src/app/shared/brand.service';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';
import { MessageService } from 'primeng/api';
import * as _ from 'lodash';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.scss']
})
export class BrandFormComponent implements OnInit {
    @Input() brandData: any;
    @Input() displayDialog4: boolean
    
    @Output() displayChangeEvent4 = new EventEmitter();
    @Output() brandEvent = new EventEmitter();
  
    brandForm:FormGroup
    status:any
    brandList: any = []
  
    constructor(private _fb: FormBuilder, private brandService:BrandService,private commonService: CommonService,
      public sessionService: SessionService, private messageService: MessageService
      ) {
  
        this.status = [
          {label:'Active', value:1},
          {label:'De-Active', value:0},
        ]
    
  
      this.brandForm = this._fb.group({
        _id: [''],
        company_details_id: ['',Validators.required],
        brand_code: ['',Validators.required],
        brand_name: ['',Validators.required],
        status: [1,Validators.required]
      })
  
    }
  
    ngOnInit() {
    }
  
    
    ngOnChanges() {
      console.log('displayDialog4',this.displayDialog4);    
      console.log('isObjectbrandData',_.isPlainObject(this.brandData))
      if(_.isPlainObject(this.brandData)){      
        console.log('brandData',this.brandData);   
        this.brandForm.controls['_id'].setValue(this.brandData._id);
        this.brandForm.controls['brand_code'].setValue(this.brandData.brand_code);
        this.brandForm.controls['brand_name'].setValue(this.brandData.brand_name);
        this.brandForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))  
        this.brandForm.controls['status'].setValue(this.brandData.status);    
        }else{           
        this.getbrandByCompany()
        }
  
    }
  
    
    getbrandByCompany(){
      this.brandService.getBrandByCompany()
      .subscribe((data:any)=>{
        console.log('brandList',data);  
      this.brandList = data       
      this.brandForm.reset();
      this.brandForm.controls['brand_code'].setValue(this.commonService.incrCode('c',data.length));
      this.brandForm.controls['status'].setValue(1);
      this.brandForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))     
      })
    }
  
    public checkValidity(): void {
      Object.keys(this.brandForm.controls).forEach((key) => {
          this.brandForm.controls[key].markAsDirty();
      });
    }
  
    addbrand(){
      console.log('brandForm',this.brandForm);
      if(this.brandForm.invalid){      
        this.checkValidity()
        return
      }
  
        this.brandService.addBrand(this.brandForm.value)
        .subscribe((data:any)=>{
          console.log('add cat',data);
          // let newData = {
          //   label : data.brand_name +' | ' +data.brand_code,
          //   value : data._id
          //  }
           this.brandEvent.emit(data);
          // this.brandList = [newData,...this.brandList];
          // this.brandList.push(data);
          // console.log('this.brandList',this.brandList);
          this.messageService.add({severity:'success', summary:'New Brand Added Successfully', detail:'New brand Added Successfully'});
          // this.stockForm.controls['brand_details_id'].setValue(data._id) 
          this.displayDialog4 = false;
        },
        error =>{
          console.log(error);
          this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
          this.displayDialog4 = false;
    
        })
    }
  
    updatebrand(){
      console.log('brandForm',this.brandForm);
      if(this.brandForm.invalid){      
        this.checkValidity()
        return
      }
  
        this.brandService.updateBrand(this.brandForm.value)
        .subscribe((data:any)=>{
          console.log('update cat',data);
          // let newData = {
          //   label : data.brand_name +' | ' +data.brand_code,
          //   value : data._id
          //  }
           this.brandEvent.emit(data);
          // this.brandList = [newData,...this.brandList];
          // this.brandList.push(data);
          // console.log('this.brandList',this.brandList);
          this.messageService.add({severity:'success', summary:'brand Updated Successfully', detail:'brand Updated Successfully'});
          // this.stockForm.controls['brand_details_id'].setValue(data._id) 
          this.displayDialog4 = false;
        },
        error =>{
          console.log(error);
          this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
          this.displayDialog4 = false;
    
        })
    }
  
    
  
    onClose(){
      // this.displayDialog = false;
      this.displayChangeEvent4.emit(false)
    }
  
      // Work against memory leak if component is destroyed
      ngOnDestroy() {
        this.displayChangeEvent4.unsubscribe();
      }
  
  
  }
  
