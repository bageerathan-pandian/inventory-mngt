import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/shared/category.service';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';
import { MessageService } from 'primeng/api';
import * as _ from 'lodash';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  @Input() catData: any;
  @Input() displayDialog1: boolean
  
  @Output() displayChangeEvent1 = new EventEmitter();
  @Output() catEvent = new EventEmitter();

  categoryForm:FormGroup
  status:any
  categoryList: any = []

  constructor(private _fb: FormBuilder, private categoryService:CategoryService,private commonService: CommonService,
    public sessionService: SessionService, private messageService: MessageService
    ) {

      this.status = [
        {label:'Active', value:1},
        {label:'De-Active', value:0},
      ]
  

    this.categoryForm = this._fb.group({
      _id: [''],
      company_details_id: ['',Validators.required],
      category_code: ['',Validators.required],
      category_name: ['',Validators.required],
      status: [1,Validators.required]
    })

  }

  ngOnInit() {
  }

  
  ngOnChanges() {
    console.log('displayDialog1',this.displayDialog1);    
    console.log('isObjectcatData',_.isPlainObject(this.catData))
    if(_.isPlainObject(this.catData)){      
      console.log('catData',this.catData);   
      this.categoryForm.controls['_id'].setValue(this.catData._id);
      this.categoryForm.controls['category_code'].setValue(this.catData.category_code);
      this.categoryForm.controls['category_name'].setValue(this.catData.category_name);
      this.categoryForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))  
      this.categoryForm.controls['status'].setValue(this.catData.status);    
      }else{           
      this.getCategoryByCompany()
      }

  }

  
  getCategoryByCompany(){
    this.categoryService.getCategoryByCompany()
    .subscribe((data:any)=>{
      console.log('categoryList',data);  
    this.categoryList = data       
    this.categoryForm.reset();
    this.categoryForm.controls['category_code'].setValue(this.commonService.incrCode('c',data.length));
    this.categoryForm.controls['status'].setValue(1);
    this.categoryForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))     
    })
  }

  public checkValidity(): void {
    Object.keys(this.categoryForm.controls).forEach((key) => {
        this.categoryForm.controls[key].markAsDirty();
    });
  }

  addCategory(){
    console.log('categoryForm',this.categoryForm);
    if(this.categoryForm.invalid){      
      this.checkValidity()
      return
    }

      this.categoryService.addCategory(this.categoryForm.value)
      .subscribe((data:any)=>{
        console.log('add cat',data);
        // let newData = {
        //   label : data.category_name +' | ' +data.category_code,
        //   value : data._id
        //  }
         this.catEvent.emit(data);
        // this.categoryList = [newData,...this.categoryList];
        // this.categoryList.push(data);
        // console.log('this.categoryList',this.categoryList);
        this.messageService.add({severity:'success', summary:'New Category Added Successfully', detail:'New Category Added Successfully'});
        // this.stockForm.controls['category_details_id'].setValue(data._id) 
        this.displayDialog1 = false;
      },
      error =>{
        console.log(error);
        this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
        this.displayDialog1 = false;
  
      })
  }

  updateCategory(){
    console.log('categoryForm',this.categoryForm);
    if(this.categoryForm.invalid){      
      this.checkValidity()
      return
    }

      this.categoryService.updateCategory(this.categoryForm.value)
      .subscribe((data:any)=>{
        console.log('update cat',data);
        // let newData = {
        //   label : data.category_name +' | ' +data.category_code,
        //   value : data._id
        //  }
         this.catEvent.emit(data);
        // this.categoryList = [newData,...this.categoryList];
        // this.categoryList.push(data);
        // console.log('this.categoryList',this.categoryList);
        this.messageService.add({severity:'success', summary:'Category Updated Successfully', detail:'Category Updated Successfully'});
        // this.stockForm.controls['category_details_id'].setValue(data._id) 
        this.displayDialog1 = false;
      },
      error =>{
        console.log(error);
        this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
        this.displayDialog1 = false;
  
      })
  }

  

  onClose(){
    // this.displayDialog = false;
    this.displayChangeEvent1.emit(false)
  }

    // Work against memory leak if component is destroyed
    ngOnDestroy() {
      this.displayChangeEvent1.unsubscribe();
    }


}
