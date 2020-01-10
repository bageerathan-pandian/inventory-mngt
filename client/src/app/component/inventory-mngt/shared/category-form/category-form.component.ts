import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/shared/category.service';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  @Input() displayDialog1: boolean
  
  @Output() displayChangeEvent1 = new EventEmitter();

  categoryForm:FormGroup
  status:any

  constructor(private _fb: FormBuilder, private categoryService:CategoryService,private commonService: CommonService,
    public sessionService: SessionService
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

  }

  addCategory(){
    console.log('categoryForm',this.categoryForm);
    // if(this.categoryForm.invalid){      
    //   this.checkValidityCat()
    //   return
    // }

      this.categoryService.addCategory(this.categoryForm.value)
      .subscribe((data:any)=>{
        console.log('add cat',data);
        let newData = {
          label : data.category_name +' | ' +data.category_code,
          value : data._id
         }
        // this.categoryList = [newData,...this.categoryList];
        // this.categoryList.push(data);
        // console.log('this.categoryList',this.categoryList);
        // this.messageService.add({severity:'success', summary:'New Category Added Successfully', detail:'New Category Added Successfully'});
        // this.stockForm.controls['category_details_id'].setValue(data._id) 
        this.displayDialog1 = false;
      },
      error =>{
        console.log(error);
        // this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
        // this.displayDialog1 = false;
  
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
