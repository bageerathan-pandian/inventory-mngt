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


  loading: boolean;
  public bradCrum: MenuItem[];
  displayDialog: boolean;
  displayDialog1: boolean;
  displayDialog2: boolean;
  displayDialog3: boolean;
  displayDialog4: boolean;
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

  stockData: any = [] // pass data to another component
  catData: any = [] // pass data to another component
  taxData: any = [] // pass data to another component
  unitData: any = [] // pass data to another component
  brandData: any = [] // pass data to another component

  constructor(private router:Router,private _fb: FormBuilder, private confirmationService: ConfirmationService,private messageService: MessageService,private stockService:StockService,private categoryService:CategoryService,private unitService: UnitService, private commonService: CommonService,
    public sessionService: SessionService
    ) {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {label:'Master',command: (event) => {
        this.router.navigate(["/inventory-mngt/master"]);
    }},
      {label:'Stock'},
  ];
  this.status = [
    {label:'Active', value:1},
    {label:'De-Active', value:0},
  ]


  this.getCategoryByCompany();
  // this.getTaxByCompany();
  this.getUnitByCompany();
  this.getStocksByCompany();
  
 
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
      { field: 'brand_details_id', header: 'Brand' },
      { field: 'stock_qty', header: 'Stock Qty' },
      { field: 'buying_price', header: 'Buying Price' },
      { field: 'mrp', header: 'MRP' },
      { field: 'buying_with_tax', header: 'Buying Price(With Tax)' },
      { field: 'selling_price', header: 'Selling Price' },
      { field: 'tax_details_id', header: 'Tax %' },
      { field: 'unit_details_id', header: 'Unit' },
      { field: 'updatedAt', header: 'Updated Date' },
      { field: 'status', header: 'Status' }
      // { field: '', header: 'Action' }
  ];
    
  }

  ngOnInit() {}

  receiveStock(event){
    console.log(event)    
     var sliceIndex = _.findIndex(this.stocksList, function (o) { return o._id == event._id; });
      console.log(sliceIndex);
      if (sliceIndex > -1) {
        // Replace item at index using native splice
        this.stocksList.splice(sliceIndex, 1, event);
        // this.stocksList = [...this.stocksList];
      }else{
        // this.stocksList = [event,...this.stocksList];
      }
      this.getStocksByCompany()
  }

  receiveCategory(event){
    console.log('receiveCategory',event) 
    this.catData = event
  }

  receiveTax(event){
    console.log('receiveTax',event) 
    this.taxData = event
  }

  receiveUnit(event){
    console.log('receiveUnit',event) 
    this.unitData = event
  }
  receiveBrand(event){
    console.log('receiveBrand',event) 
    this.brandData = event
  }

  onDialogClose(event){
    console.log(event)       
    this.catData = []     // clear new cat data while open stock form
    this.unitData = []  // clear new unit data while open stock form
    this.taxData = []  // clear new unit data while open stock form
    this.brandData = []  // clear new unit data while open stock form
    this.stockData = []
    this.displayDialog = false;
  }

  onDialogClose1(event){
    console.log(event)  
    this.displayDialog1 = false;
    this.catData = null
  }
  
  onDialogClose2(event){
    console.log(event) 
    this.displayDialog2 = false;
    this.unitData = null
  }

  
  onDialogClose3(event){
    console.log(event) 
    this.displayDialog3 = false;
    this.taxData = null
  }

  
  
  onDialogClose4(event){
    console.log(event) 
    this.displayDialog4 = false;
    this.brandData = null
  }

  categoryDialog(event){
    console.log('categoryDialog',event)   
    this.displayDialog1 = event;
  }

  taxDialog(event){
    console.log('taxDialog',event)   
    this.displayDialog3 = event;
  }

  unitDialog(event){
    console.log('unitDialog',event) 
    this.displayDialog2 = event;
  }

  brandDialog(event){
    console.log('brandDialog',event) 
    this.displayDialog4 = event;
  }

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

  getStocksByCompany(){
    this.loading = true
    this.stockService.getStockByCompany()
    .subscribe((data:any)=>{
      console.log('stocksList',data);
      this.stocksList = data;
      this.loading = false;
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

 
  showDialogToAdd(stockData) {
    this.stockData = stockData;
    this.displayDialog = true;
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


  onChangeStatus(event){
    console.log(event);
    let isChecked = event.checked;
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

