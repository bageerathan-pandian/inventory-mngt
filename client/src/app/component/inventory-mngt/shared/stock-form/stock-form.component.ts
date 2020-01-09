import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockService } from 'src/app/shared/stock.service';
import { CategoryService } from 'src/app/shared/category.service';
import { UnitService } from 'src/app/shared/unit.service';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';
import { Stock } from 'src/app/model/stock.model';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit {



  displayDialog: boolean;
  displayDialog1: boolean;
  displayDialog2: boolean;
  stockForm: FormGroup;
  categoryForm: FormGroup
  unitForm:FormGroup
  car: any = {};
  cols: any[];
  status:any = [];
  categoryList:any = [];
  stockListSheet:any = []
  unitList:any = []
  constructor(private _fb: FormBuilder, private stockService:StockService,private categoryService:CategoryService,private unitService: UnitService, private commonService: CommonService,
    public sessionService: SessionService
    ) {

  this.status = [
    {label:'Active', value:1},
    {label:'De-Active', value:0},
  ]


  this.getCategoryByCompany();
  this.getUnitByCompany();
  
    this.stockForm = this._fb.group({
      _id: [''],
      company_details_id: ['',Validators.required],
      stock_code: ['',Validators.required],
      stock_name: ['',Validators.required],
      category_details_id: ['',Validators.required],
      stock_qty: ['',Validators.required],
      buying_price: ['',Validators.required],
      selling_price: ['',Validators.required],
      product_details: ['',Validators.required],
      unit_details_id: [''],
      status: [1,Validators.required]
    })
  
    this.categoryForm = this._fb.group({
      _id: [''],
      company_details_id: ['',Validators.required],
      category_code: ['',Validators.required],
      category_name: ['',Validators.required],
      status: [1,Validators.required]
    })

    this.unitForm = this._fb.group({
      _id: [''],
      company_details_id: ['',Validators.required],
      unit_code: ['',Validators.required],
      unit_name: ['',Validators.required],
      status: [1,Validators.required]
    })

    this.cols = [
      { field: 'stock_code', header: 'Code' },
      { field: '_id', header: 'Barcode' },
      { field: 'stock_name', header: 'Stock Name' },
      { field: 'category_details_id', header: 'Category' },
      { field: 'stock_qty', header: 'Stock Qty' },
      { field: 'buying_price', header: 'Buying Price' },
      { field: 'selling_price', header: 'Selling Price' },
      { field: 'product_details', header: 'Product Details' },
      { field: 'unit_details_id', header: 'Unit' },
      { field: 'updatedAt', header: 'Updated Date' },
      { field: 'status', header: 'Status' }
      // { field: '', header: 'Action' }
  ];
    
  }

  ngOnInit() {}

  getCategoryByCompany(){
    this.categoryService.getCategoryByCompany()
    .subscribe((data:any)=>{
      console.log('categoryList',data);  
      this.categoryList.push({  label:'+ Add New Category',  value:0 });       
      for(let catData of data){
        this.categoryList.push({
          label : catData.category_name +' | ' +catData.category_code,
          value : catData._id
         })
      }       
      console.log('categoryList1',this.categoryList);
    })
  }

  getUnitByCompany(){
    this.unitService.getUnitByCompany()
    .subscribe((data:any)=>{
      console.log('unitList',data); 
      this.unitList.push({  label:'+ Add New Unit',  value:0 });          
      for(let unitData of data){
        this.unitList.push({
          label : unitData.unit_name +' | ' +unitData.unit_code,
          value : unitData._id
         })
      }       
      console.log('unitList',this.unitList);
    })
  }


  onSelectCat(event){    
    console.log(event.value); 
    if(event.value == 0){
      this.showDialogToAddCat()
      this.stockForm.controls['category_details_id'].reset();
      return false
    }
  }

  onSelectUnit(event){    
    console.log(event.value); 
    if(event.value == 0){
      this.showDialogToAddUnit()
      this.stockForm.controls['unit_details_id'].reset();
      return false
    }
  }


  showDialogToAdd() {
    this.stockForm.reset();
    // this.stockForm.controls['stock_code'].setValue(this.commonService.incrCode('s',this.stocksList.length));
    this.stockForm.controls['status'].setValue(1);
    this.stockForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
    this.displayDialog = true;
  }

  showDialogToAddCat() {
    this.categoryForm.reset();
    this.categoryForm.controls['category_code'].setValue(this.commonService.incrCode('c',this.categoryList.length));
    this.categoryForm.controls['status'].setValue(1);
    this.categoryForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
    this.displayDialog1 = true;
  }

  showDialogToAddUnit() {
    this.unitForm.reset();
    this.unitForm.controls['unit_code'].setValue(this.commonService.incrCode('u',this.unitList.length));
    this.unitForm.controls['status'].setValue(1);
    this.unitForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
    this.displayDialog2 = true;
  }

  public checkValidity(): void {
    Object.keys(this.stockForm.controls).forEach((key) => {
        this.stockForm.controls[key].markAsDirty();
    });
  }

  public checkValidityUnit(): void {
    Object.keys(this.stockForm.controls).forEach((key) => {
        this.stockForm.controls[key].markAsDirty();
    });
  }

  public checkValidityCat(): void {
    Object.keys(this.stockForm.controls).forEach((key) => {
        this.stockForm.controls[key].markAsDirty();
    });
  }

  save() {
    console.log(this.stockForm.value);    
    if(this.stockForm.invalid){
      this.checkValidity()
      return false;
    }
    if(this.stockForm.value._id){
      this.onRowUpdate(this.stockForm.value);
    }else{      
      this.onRowAdd(this.stockForm.value);
    }
  }

  delete(stock,index){
    console.log('delete',stock,index);
  //   this.confirmationService.confirm({
  //     message: 'Are you sure that you want to delete this Stock?',
  //     accept: () => {
  //         //Actual logic to perform a confirmation
  //         this.onRowDelete(stock,index);
  //     }
  // });
  }

  onRowAdd(stock) {
    console.log('onRowAdd',stock);
    console.log('onRowAdd1',this.stockForm);
    this.stockService.addStock(stock)
    .subscribe((data:any)=>{
      console.log('add customer',data);
      // this.stocksList = [data,...this.stocksList];
    
      // console.log('this.stocksList',this.stocksList);
      // this.messageService.add({severity:'success', summary:'Stock Added Successfully', detail:'Stock Added Successfully'});
      this.displayDialog = false;
    },
    error =>{
      console.log(error);
      // this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
    }
      
  
  onRowEdit(stock: Stock) {
    console.log('onRowEdit',stock);
    console.log('onRowEdit1',this.stockForm);
    this.displayDialog = true;
     this.stockForm.controls['_id'].setValue(stock._id);
     this.stockForm.controls['stock_code'].setValue(stock.stock_code);
     this.stockForm.controls['stock_name'].setValue(stock.stock_name);
     this.stockForm.controls['category_details_id'].setValue(stock.category_details_id._id);
     this.stockForm.controls['company_details_id'].setValue(stock.company_details_id._id)
     this.stockForm.controls['stock_qty'].setValue(stock.stock_qty);
     this.stockForm.controls['buying_price'].setValue(stock.buying_price);
     this.stockForm.controls['selling_price'].setValue(stock.selling_price);
     this.stockForm.controls['product_details'].setValue(stock.product_details);
     this.stockForm.controls['unit_details_id'].setValue(stock.unit_details_id._id);
     this.stockForm.controls['status'].setValue(stock.status);
  }

  onRowDelete(stock,index) {
    console.log(stock,index);
     this.stockService.deleteStock(stock._id)
    .subscribe((data:any)=>{
      console.log('delete',data);
      // this.stocksList.splice(index, 1);
      // this.stocksList = [...this.stocksList];
      // this.messageService.add({severity:'success', summary:'Stock Deleted Successfully', detail:'Stock Deleted Successfully'});
  
    },
    error =>{
      console.log(error);
      // this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }

  onRowUpdate(stock) {
    console.log(stock);
    this.displayDialog = false;
  
    this.stockService.updateStock(stock)
    .subscribe((data:any)=>{
      console.log('update',data);
      // var sliceIndex = _.findIndex(this.stocksList, function (o) { return o._id == stock._id; });
      // console.log(sliceIndex);
      // if (sliceIndex > -1) {
        // Replace item at index using native splice
        // this.stocksList.splice(sliceIndex, 1, data);
      // }
      // this.stocksList = [...this.stocksList];
      // this.messageService.add({severity:'success', summary:'Stock Updated Successfully', detail:'Stock Updated Successfully'});
  
    },
    error =>{
      console.log(error);
      // this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })

  }

  onChangeStatus(event){
    console.log(event);
    let isChecked = event.checked;
  }

  addCategory(){
    console.log('categoryForm',this.categoryForm);
    if(this.categoryForm.invalid){      
      this.checkValidityCat()
      return
    }

      this.categoryService.addCategory(this.categoryForm.value)
      .subscribe((data:any)=>{
        console.log('add cat',data);
        let newData = {
          label : data.category_name +' | ' +data.category_code,
          value : data._id
         }
        this.categoryList = [newData,...this.categoryList];
        // this.categoryList.push(data);
        console.log('this.categoryList',this.categoryList);
        // this.messageService.add({severity:'success', summary:'New Category Added Successfully', detail:'New Category Added Successfully'});
        this.stockForm.controls['category_details_id'].setValue(data._id) 
        this.displayDialog1 = false;
      },
      error =>{
        console.log(error);
        // this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
        this.displayDialog1 = false;
  
      })
  }

  addUnit(){
    console.log('unitForm',this.unitForm);
    if(this.unitForm.invalid){      
      this.checkValidityUnit()
      return
    }

      this.unitService.addUnit(this.unitForm.value)
      .subscribe((data:any)=>{
        console.log('add unit',data);
        let newData = {
          label : data.unit_name +' | ' +data.unit_code,
          value : data._id
         }
        this.unitList = [newData,...this.unitList];
        // this.categoryList.push(data);
        console.log('this.unitList',this.unitList);
        // this.messageService.add({severity:'success', summary:'New Unit Added Successfully', detail:'New Unit Added Successfully'});
        this.stockForm.controls['unit_details_id'].setValue(data._id) 
        this.displayDialog2 = false;
      },
      error =>{
        console.log(error);
        // this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
        this.displayDialog2 = false;
  
      })
  }
  

}

