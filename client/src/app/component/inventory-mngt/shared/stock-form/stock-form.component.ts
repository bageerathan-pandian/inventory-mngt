import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
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

  @Input() stockData: any;
  @Input() displayDialog: boolean

  @Output() stockEvent = new EventEmitter();
  @Output() displayChangeEvent = new EventEmitter();
  
  @Output() categoryDialogEvent = new EventEmitter();
  @Output() unitDialogEvent = new EventEmitter();

  stockForm: FormGroup;
  categoryForm: FormGroup
  unitForm:FormGroup
  car: any = {};
  cols: any[];
  status:any = [];
  stocksList: any = []
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

  this.getStocksByCompany();
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
  
    
    
  }

  ngOnInit() {}

  ngOnChanges() {
    console.log('displayDialog',this.displayDialog);
    if(this.stockData){      
    console.log('stockData',this.stockData);   
    this.stockForm.controls['_id'].setValue(this.stockData._id ? this.stockData._id : '');
    this.stockForm.controls['stock_code'].setValue(this.stockData.stock_code ? this.stockData.stock_code : '');
    this.stockForm.controls['stock_name'].setValue(this.stockData.stock_name ? this.stockData.stock_name : '');
    this.stockForm.controls['category_details_id'].setValue(this.stockData.category_details_id  ? this.stockData.category_details_id._id : null);
    this.stockForm.controls['company_details_id'].setValue(this.stockData.company_details_id ? this.stockData.company_details_id._id : null)
    this.stockForm.controls['stock_qty'].setValue(this.stockData.stock_qty ? this.stockData.stock_qty : 0);
    this.stockForm.controls['buying_price'].setValue(this.stockData.buying_price ? this.stockData.buying_price : '');
    this.stockForm.controls['selling_price'].setValue(this.stockData.selling_price ? this.stockData.selling_price : '');
    this.stockForm.controls['product_details'].setValue(this.stockData.product_details ? this.stockData.product_details : '');
    this.stockForm.controls['unit_details_id'].setValue(this.stockData.unit_details_id ? this.stockData.unit_details_id._id : null);
    this.stockForm.controls['status'].setValue(this.stockData.status ? this.stockData.status : '');      
    }else{     
    this.stockForm.reset() 
    this.stockForm.controls['stock_code'].setValue(this.commonService.incrCode('s',this.stocksList.length));
    this.stockForm.controls['status'].setValue(1);
    this.stockForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
    }
    
  }

  getStocksByCompany(){
    this.stockService.getStockByCompany()
    .subscribe((data:any)=>{
      console.log('stocksList',data);
      this.stocksList = data;      
      this.stockForm.controls['stock_code'].setValue(this.commonService.incrCode('s',this.stocksList.length));
    })
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


  onSelectCat(event){    
    console.log(event.value); 
    if(event.value == 0){
      // this.showDialogToAddCat()
      this.categoryDialogEvent.emit(true)
      this.stockForm.controls['category_details_id'].reset();
      return false
    }
  }

  onSelectUnit(event){    
    console.log(event.value); 
    if(event.value == 0){
      // this.showDialogToAddUnit()      
      this.unitDialogEvent.emit(true)
      this.stockForm.controls['unit_details_id'].reset();
      return false
    }
  }


  showDialogToAddCat() {
    this.categoryForm.reset();
    this.categoryForm.controls['category_code'].setValue(this.commonService.incrCode('c',this.categoryList.length));
    this.categoryForm.controls['status'].setValue(1);
    this.categoryForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
    // this.displayDialog1 = true;
  }

  showDialogToAddUnit() {
    this.unitForm.reset();
    this.unitForm.controls['unit_code'].setValue(this.commonService.incrCode('u',this.unitList.length));
    this.unitForm.controls['status'].setValue(1);
    this.unitForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
    // this.displayDialog2 = true;
  }

  public checkValidity(): void {
    Object.keys(this.stockForm.controls).forEach((key) => {
        this.stockForm.controls[key].markAsDirty();
    });
  }


  save() {
    console.log(this.stockForm.value);  
    
    // this.stockEvent.emit(this.stockForm.value) 
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


  onRowAdd(stock) {
    console.log('onRowAdd',stock);
    console.log('onRowAdd1',this.stockForm);
    this.stockService.addStock(stock)
    .subscribe((data:any)=>{
      console.log('add customer',data);
      
        this.stockEvent.emit(data) 
      // this.stocksList = [data,...this.stocksList];
    
      // console.log('this.stocksList',this.stocksList);
      // this.messageService.add({severity:'success', summary:'Stock Added Successfully', detail:'Stock Added Successfully'});
     
    },
    error =>{
      console.log(error);
      // this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
    }
     
  

  onRowUpdate(stock) {
    console.log(stock);
  
    this.stockService.updateStock(stock)
    .subscribe((data:any)=>{
      console.log('update',data);
      
      this.stockEvent.emit(data) 
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

  onClose(){
    // this.displayDialog = false;
    this.displayChangeEvent.emit(false)
  }

    // Work against memory leak if component is destroyed
    ngOnDestroy() {
      this.stockEvent.unsubscribe();
      this.displayChangeEvent.unsubscribe();
    }

   

}

