import { Component, OnInit } from "@angular/core";
import { MenuItem, MessageService, ConfirmationService } from "primeng/api";
import { Router } from "@angular/router";
import { Category } from 'src/app/model/category.model';
import * as _ from 'lodash';
import { CategoryService } from 'src/app/shared/category.service';
import { AuthService } from 'src/app/shared/auth.service';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: "app-category-master",
  templateUrl: "./category-master.component.html",
  styleUrls: ["./category-master.component.scss"],
  providers: [ConfirmationService]
})
export class CategoryMasterComponent implements OnInit {
  
  loading: boolean;
  public bradCrum: MenuItem[];
  categoryList: Category[];
  categoryListSheet: any[] = [];
  displayDialog1: boolean;
  status:any = [];
  cols: any[];
  columns: any[];
  catData:any = []
  constructor(private router:Router,private auth:AuthService, private confirmationService: ConfirmationService,private messageService: MessageService,private categoryService:CategoryService, private commonService: CommonService,
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
   
   
    // if(this.user_details.role == '0'){
    //   this.getCategory();
    // }else{
      this.getCategoryByCompany();
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
    this.loading = true
    this.categoryService.getCategory()
    .subscribe((data:any)=>{
      console.log('categoryList',data);
      this.categoryList = data;
      this.loading = false;
    })
  }

  getCategoryByCompany(){
    this.loading = true
    this.categoryService.getCategoryByCompany()
    .subscribe((data:any)=>{
      console.log('categoryList',data);
      this.categoryList = data;
      this.loading = false;
    })
  }
 
  // showDialogToAdd() {
  //   this.categoryForm.reset();
  //   this.categoryForm.controls['category_code'].setValue(this.commonService.incrCode('c',this.categoryList.length));
  //   this.categoryForm.controls['status'].setValue(1);
  //   this.categoryForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
  //   this.displayDialog1 = true;
  // }

 
 

  delete(data,index){
    console.log('delete',data,index);
    
    // this.messageService.clear();
    // this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'You want to delete this item'});

    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this category?',
      accept: () => {
          //Actual logic to perform a confirmation
          this.onRowDelete(data,index);
      }
  });
  }

  onConfirm() {
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
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

  showDialogToAdd(Data) {
    this.catData = Data;
    this.displayDialog1 = true;
  }

  onDialogClose1(event){
    console.log(event)  
    this.displayDialog1 = false;
  }

  receiveCategory(event){
    console.log('receiveCategory',event) 
        
    var sliceIndex = _.findIndex(this.categoryList, function (o) { return o._id == event._id; });
    console.log(sliceIndex);
    if (sliceIndex > -1) {
      // Replace item at index using native splice
      this.categoryList.splice(sliceIndex, 1, event);
      this.categoryList = [...this.categoryList];
    }else{
      this.categoryList = [event,...this.categoryList];
    }
  }

  
}
