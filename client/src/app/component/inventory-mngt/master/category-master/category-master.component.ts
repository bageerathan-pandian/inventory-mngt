import { Component, OnInit } from "@angular/core";
import { MenuItem, MessageService, ConfirmationService } from "primeng/api";
import { Router } from "@angular/router";
import { Category } from 'src/app/model/category.model';
import * as _ from 'lodash';
import { CategoryService } from 'src/app/shared/category.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: "app-category-master",
  templateUrl: "./category-master.component.html",
  styleUrls: ["./category-master.component.scss"],
  providers: [ConfirmationService]
})
export class CategoryMasterComponent implements OnInit {
  
  loding: boolean = true;
  public bradCrum: MenuItem[];
  categoryList: Category[];
  categoryListSheet: any[] = [];
  categoryForm: FormGroup
  clonedCars: { [s: string]: Category; } = {};
  displayDialog: boolean;
  car: any = {};  
  status:any = [];
  cols: any[];
  columns: any[];
  constructor(private router:Router,private _fb: FormBuilder, private auth:AuthService, private confirmationService: ConfirmationService,private messageService: MessageService,private categoryService:CategoryService, private commonService: CommonService) {
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
        label: "Category",
        command: event => {
          this.router.navigate(["/inventory-mngt/master/category"]);
        }
      }
    ];
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
   
    // if(this.user_details.role == '0'){
    //   this.getCategory();
    // }else{
      this.getCategoryByCompany(this.auth.getUserCompanyId());
    // }
    this.cols = [
      // { field: '_id', header: '#' },
      { field: 'category_code', header: 'Code' },
      { field: 'category_name', header: 'Category Name' },
      { field: 'updatedAt', header: 'Updated Date' },
      { field: 'status', header: 'Status' }
      // { field: '', header: 'Action' }
  ];

  }

  getCategory(){
    this.categoryService.getCategory()
    .subscribe((data:any)=>{
      console.log('categoryList',data);
      this.categoryList = data;
      this.loding = false;
    })
  }

  getCategoryByCompany(id){
    this.categoryService.getCategoryByCompany(id)
    .subscribe((data:any)=>{
      console.log('categoryList',data);
      this.categoryList = data;
      this.loding = false;
    })
  }
 
  showDialogToAdd() {
    this.categoryForm.reset();
    this.categoryForm.controls['category_code'].setValue(this.commonService.incrCode('c',this.categoryList.length));
    this.categoryForm.controls['status'].setValue(1);
    this.categoryForm.controls['company_details_id'].setValue(this.auth.getUserData().company_details_id._id)
    this.displayDialog = true;
  }

  public checkValidity(): void {
    Object.keys(this.categoryForm.controls).forEach((key) => {
        this.categoryForm.controls[key].markAsDirty();
    });
  }

  save() {
    if(this.categoryForm.invalid){
      this.checkValidity()
      return false;
    }
    if(this.categoryForm.value._id){
      this.onRowUpdate(this.categoryForm.value);
    }else{      
      this.onRowAdd(this.categoryForm.value);
    }
  }

  delete(data,index){
    console.log('delete',data,index);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this category?',
      accept: () => {
          //Actual logic to perform a confirmation
          this.onRowDelete(data,index);
      }
  });
  }

  onRowAdd(category) {
    console.log('onRowAdd',category);
           // this.cars.push(newcar); 
        this.categoryService.addCategory(category)
        .subscribe((data:any)=>{
          console.log('add cat',data);
          this.categoryList = [data,...this.categoryList];
        
          console.log('this.categoryList',this.categoryList);
          this.messageService.add({severity:'success', summary:'Category Added Successfully', detail:'Category Added Successfully'});
          this.displayDialog = false;
        },
        error =>{
          console.log(error);
          this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
    
        })
  }
  
  onRowEdit(category: Category) {
    console.log(category);
    this.displayDialog = true;
    this.categoryForm.controls['_id'].setValue(category._id);
    this.categoryForm.controls['category_code'].setValue(category.category_code);
    this.categoryForm.controls['category_name'].setValue(category.category_name);
    this.categoryForm.controls['company_details_id'].setValue(category.company_details_id._id)
    this.categoryForm.controls['status'].setValue(category.status);
  }

  onRowDelete(category,index) {
    console.log(category,index);
     this.categoryService.deleteCategory(category._id)
    .subscribe((data:any)=>{
      console.log('delete',data);
      this.categoryList.splice(index, 1);
      this.categoryList = [...this.categoryList];
      this.messageService.add({severity:'success', summary:'Category Deleted Successfully', detail:'Category Deleted Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }

  onRowUpdate(category) {
    console.log('onRowUpdate',category);
    this.displayDialog = false;
  
    this.categoryService.updateCategory(category)
    .subscribe((data:any)=>{
      console.log('update',data);
      var sliceIndex = _.findIndex(this.categoryList, function (o) { return o._id == category._id; });
      console.log(sliceIndex);
      if (sliceIndex > -1) {
        // Replace item at index using native splice
        this.categoryList.splice(sliceIndex, 1, data);
      }
      this.categoryList = [...this.categoryList];
      this.messageService.add({severity:'success', summary:'Category Updated Successfully', detail:'Category Updated Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }

  onChangeStatus(event,id){
    console.log(event);
    let isChecked = event.checked;
    this.categoryService.updateStatus(event.checked,id)
    .subscribe((data:any)=>{
      this.messageService.add({severity:'success', summary:'Status Updated Successfully', detail:'Status Updated Successfully'});
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'}); 

    })
  }

  
}
