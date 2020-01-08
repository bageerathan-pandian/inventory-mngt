import { Component, OnInit } from '@angular/core';
import { Stock } from "src/app/model/stock.model";
import {MenuItem} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { StockService } from 'src/app/shared/stock.service';
import { CategoryService } from 'src/app/shared/category.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { CommonService } from 'src/app/shared/common.service';
import { UnitService } from 'src/app/shared/unit.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-stock-master',
  templateUrl: './stock-master.component.html',
  styleUrls: ['./stock-master.component.scss'],
  providers: [ConfirmationService]
})
export class StockMasterComponent implements OnInit {


  loding: boolean = true;
  public bradCrum: MenuItem[];
  displayDialog: boolean;
  displayDialog1: boolean;
  displayDialog2: boolean;
  stockForm: FormGroup;
  categoryForm: FormGroup
  unitForm:FormGroup
  car: any = {};
  cols: any[];
  status:any = [];
  stocksList: Stock[];
  clonedCars: { [s: string]: Stock } = {};
  categoryList:any = [];
  stockListSheet:any = []
  unitList:any = []
  constructor(private router:Router,private _fb: FormBuilder, private auth: AuthService, private confirmationService: ConfirmationService,private messageService: MessageService,private stockService:StockService,private categoryService:CategoryService,private unitService: UnitService, private commonService: CommonService,
    public sessionService: SessionService
    ) {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {label:'Master',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard']);
    }},
      {label:'Stock'},
  ];
  this.status = [
    {label:'Active', value:1},
    {label:'De-Active', value:0},
  ]


  this.getCategoryByCompany();
  this.getUnitByCompany();
  this.getStocksByCompany();
  
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
      for(let unitData of data){
        this.unitList.push({
          label : unitData.unit_name +' | ' +unitData.unit_code,
          value : unitData._id
         })
      }       
      console.log('unitList',this.unitList);
    })
  }

  getStocksByCompany(){
    this.stockService.getStockByCompany()
    .subscribe((data:any)=>{
      console.log('stocksList',data);
      this.stocksList = data;
      this.loding = false;
      for(let sheetData of data){
        this.stockListSheet.push({
          'Barcode' : sheetData._id,
          'Stock Code' : sheetData.stock_code,
          'Stock Name' : sheetData.stock_name,
          'Category Name' : sheetData.category_details_id.category_name,
          'Stock Qty' : sheetData.stock_qty,
          'Buying Price' : sheetData.buying_price,
          'Selling Price' : sheetData.selling_price,
          'Product Details' : sheetData.product_details,
          'Unit' : sheetData.unit_details_id ? sheetData.unit_details_id.unit_name : '',
          'Updated date'  : sheetData.updatedAt,
          'Status'  : sheetData.status
          // ''  : sheetData.status
        })
      }
    })
  }

  showDialogToAdd() {
    this.stockForm.reset();
    this.stockForm.controls['stock_code'].setValue(this.commonService.incrCode('s',this.stocksList.length));
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
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this Stock?',
      accept: () => {
          //Actual logic to perform a confirmation
          this.onRowDelete(stock,index);
      }
  });
  }

  onRowAdd(stock) {
    console.log('onRowAdd',stock);
    console.log('onRowAdd1',this.stockForm);
    this.stockService.addStock(stock)
    .subscribe((data:any)=>{
      console.log('add customer',data);
      this.stocksList = [data,...this.stocksList];
    
      console.log('this.stocksList',this.stocksList);
      this.messageService.add({severity:'success', summary:'Stock Added Successfully', detail:'Stock Added Successfully'});
      this.displayDialog = false;
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

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
      this.stocksList.splice(index, 1);
      this.stocksList = [...this.stocksList];
      this.messageService.add({severity:'success', summary:'Stock Deleted Successfully', detail:'Stock Deleted Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }

  onRowUpdate(stock) {
    console.log(stock);
    this.displayDialog = false;
  
    this.stockService.updateStock(stock)
    .subscribe((data:any)=>{
      console.log('update',data);
      var sliceIndex = _.findIndex(this.stocksList, function (o) { return o._id == stock._id; });
      console.log(sliceIndex);
      if (sliceIndex > -1) {
        // Replace item at index using native splice
        this.stocksList.splice(sliceIndex, 1, data);
      }
      this.stocksList = [...this.stocksList];
      this.messageService.add({severity:'success', summary:'Stock Updated Successfully', detail:'Stock Updated Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

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
        this.messageService.add({severity:'success', summary:'New Category Added Successfully', detail:'New Category Added Successfully'});
        this.stockForm.controls['category_details_id'].setValue(data._id) 
        this.displayDialog1 = false;
      },
      error =>{
        console.log(error);
        this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
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
        this.messageService.add({severity:'success', summary:'New Unit Added Successfully', detail:'New Unit Added Successfully'});
        this.stockForm.controls['unit_details_id'].setValue(data._id) 
        this.displayDialog2 = false;
      },
      error =>{
        console.log(error);
        this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
        this.displayDialog2 = false;
  
      })
  }
  
  exportPdf() {
    import("jspdf").then(jsPDF => {
        import("jspdf-autotable").then(x => {
            const doc = new jsPDF();
            // console.log(this.cols,this.categoryListSheet);
            // doc.autoTable(this.cols, this.categoryListSheet);
            doc.save('cat-primengTable.pdf');
        })
    })
}

exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.stockListSheet);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "primengTable");
    });
}

saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
}

}

