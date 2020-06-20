import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Category } from 'src/app/model/category.model';
import { Stock } from 'src/app/model/stock.model';
import { Customer } from 'src/app/model/customer.model';
import { Sales } from 'src/app/model/sales.model.';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PdfGeneratorService } from 'src/app/shared/pdf-generator.service';
import { SessionService } from 'src/app/shared/session.service';
import { CustomerService } from 'src/app/shared/customer.service';
import { StockService } from 'src/app/shared/stock.service';
import { CategoryService } from 'src/app/shared/category.service';
import { CommonService } from 'src/app/shared/common.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { environment } from 'src/environments/environment';

import * as _ from 'lodash';
import { Supplier } from 'src/app/model/supplier.model';
import { SuppierService } from 'src/app/shared/suppier.service';
import { PurchaseService } from 'src/app/shared/purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
  providers:[ConfirmationService]
})
export class PurchaseComponent implements OnInit {


  public bradCrum: MenuItem[];
  filteredBrands: any[];
  categoryList:Category[];
  stocks:Stock[];
  suppliers:Supplier[];
  stocksList:any = [];
  supplierList:any = [];
  cities1: any = [];
  salesList: Sales[] = [];
  invoiceDate: any = new Date();
  rowData: any = {};
  paymentStatus:any =[];
  paymentType:any =[];
  discountPer:any = [];
  purchaseInvoiceForm:FormGroup;
  customerForm: FormGroup
  invoice_id:number;
  customerName:any;
  discount:number = 0.00;
  sub_total:number =0.00;
  grand_total:number = 0.00;
  payment_type:number;
  payment_status:number;
  
  status:any
  pdfUrl:string;
  showPdf:boolean = false;

  displayDialog: boolean;
  displayDialog1: boolean;
  displayDialog2: boolean;
  displayDialog3: boolean;
  
  stockData:any = []// pass data to another component
  supplierData: any = [] // pass data to another component
  catData: any = [] // pass data to another component
  unitData: any = [] // pass data to another component
  formType: string = 'purchase'
  
  invoiceArray:any = [];
  @ViewChild("form",{static:false}) form;
  @ViewChild('printDiv',{static:false}) printDiv: ElementRef;
  selectedSupplierData: any = []

  constructor(private _fb:FormBuilder,
    private router: Router,
    private messageService: MessageService, private supplierService: SuppierService,private stockService:StockService,private categoryService: CategoryService,private purchaseService:PurchaseService, private commonService: CommonService,
    private pdfGenerator: PdfGeneratorService,
    public sessionService : SessionService
  ) {
    // let invalidDate = new Date();
    // this.invalidDates = [invalidDate];
    this.purchaseInvoiceForm = this._fb.group({
      _id:[''],
      company_details_id: [this.sessionService.getItem('company_id'),Validators.required],
      invoice_purchase_code:['',Validators.required],
      invoice_date:[new Date(),Validators.required],
      supplier_details_id:['',Validators.required],
      invoiceList: this._fb.array([
        this.initRowFirst()
      ]),
      sub_total:[0.00],
      discount:[0.00],
      grand_total:[0.00,Validators.required],
      payment_type:[1,Validators.required],
      paid_amount:[0.00,Validators.required],
      balance_amount:[0.00,Validators.required],
      payment_status:[1,Validators.required]
    })
  
    
  }

  ngOnInit() {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {
        label: "Purchase",
        command: event => {
          this.router.navigate(["/inventory-mngt/purchase"]);
        }
      }
    ];

    this.status = [
      {label:'Active', value:1},
      {label:'De-Active', value:0},
    ]

    this.paymentType = [
      {label:'Cash', value:1},
      {label:'Card', value:2},
    ]
    this.paymentStatus = [
      {label:'Paid', value:1},
      {label:'Pending', value:2},
    ]
    this.discountPer = [
      {label:'5%', value:1},
      {label:'10%', value:2}
    ]
 
    this.getLastInvoiceByCompany();
    this.getSupplierByCompany();
    this.getCategoryByCompany();
    this.getStockByCompany();
       
    this.purchaseInvoiceForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
  }

  @ViewChild("placesRef",{static:false}) placesRef : GooglePlaceDirective;
    
  public handleAddressChange(address: Address) {
    console.log('address',address);
  // Do some stuff
  this.customerForm.controls['customer_address'].setValue(address.formatted_address);
}

public checkValidity(): void {
  Object.keys(this.purchaseInvoiceForm.controls).forEach((key) => {
    console.log('key',key)
      this.purchaseInvoiceForm.controls[key].markAsDirty();
  });
  Object.keys(this.purchaseInvoiceForm.get('invoiceList')['controls']).forEach((key1) => {
    console.log('key1',key1)
    Object.keys(this.purchaseInvoiceForm.get('invoiceList')['controls'][key1].controls).forEach((key2) => {
      console.log('key2',key2)
      console.log('invoiceList',this.purchaseInvoiceForm.get('invoiceList')['controls'][key1].controls[key2])
      this.purchaseInvoiceForm.get('invoiceList')['controls'][key1].controls[key2].markAsDirty();
  });
});
}

public checkValidityCus(): void {
  Object.keys(this.customerForm.controls).forEach((key) => {
      this.customerForm.controls[key].markAsDirty();
  });
}

priviewPdf(){
  this.pdfGenerator.testPdg()
  .subscribe((data:any)=>{
    console.log('testPdf',data);
    console.log('url',environment.api_url + data);
    // printJS('docs/'+ environment.api_url + data)
    // printJS({printable:'docs/'+environment.api_url + data +"'", type:'pdf', showModal:true})
  })
}

printOrder(){
  
  // let elementCopy = this.printDiv(true);
  // this.printDiv.nativeElement.appendChild();
  // document.body.appendChild(this.printDiv.nativeElement);

  // window.print();
  
  // printJS('print-section', 'html')
}

printOrderWithoutView(){
  
}

initRowFirst() {
    return this._fb.group({
      stock_details_id: ['',Validators.required],
      price: ['',Validators.required],
      qty: ['',Validators.required],
      total_qty: ['',Validators.required],
      total: ['',Validators.required]
    });
}

  getLastInvoiceByCompany(){
    this.purchaseService.getLastInvoice()
    .subscribe((data:any)=>{
      console.log('getLastInvoice',data);      
    this.purchaseInvoiceForm.controls['invoice_purchase_code'].setValue(this.commonService.incrCode('INV',data)); 
    },
    error =>{      
    this.purchaseInvoiceForm.controls['invoice_purchase_code'].setValue(this.commonService.incrCode('INV',0)); 
    })
  }


  getSupplierByCompany(){
    this.supplierList = []
    this.supplierService.getSupplierByCompany()
    .subscribe((data:any)=>{
      console.log('supplierList',data);
      this.suppliers= data;
      this.supplierList.push({  label:'+ Add New Supplier',  value:0 });
      for(let custData of this.suppliers){
        let listSup =  {
          label:custData.supplier_name +' | '+ custData.supplier_code,
          value:custData._id
        }
        this.supplierList.push(listSup);
      }
      console.log('customerList',this.supplierList);
    })
    }

   getCategoryByCompany(){
    this.categoryService.getCategoryByCompany()
    .subscribe((data:any)=>{
      console.log('categoryList',data);
      this.categoryList = data;
    })
  }

  getStockByCompany(){
    this.stocks = [];  
    this.stocksList = [];
    this.stockService.getStockByCompany()
    .subscribe((data:any)=>{
      console.log('stocksList',data);
      this.stocks = data;      
        // this.stocksList = data;
      this.stocksList.push({  label:'+ Add New Stock',  value:0 });
      for(let stockData of this.stocks){
        let listStock=  {
          label:stockData.stock_name + ' | ' + stockData.stock_code,
          value:stockData._id
        }
        this.stocksList.push(listStock);
      }
    })
   
  }



  addPurchase(){ 
    console.log('invoiceArray',this.purchaseInvoiceForm.value);
    this.purchaseService.addPurchase(this.purchaseInvoiceForm.value)
    .subscribe((data:any)=>{
        console.log(data);
        this.getStockByCompany() // refresh stock qty
        this.purchaseInvoiceForm.reset();
        this.purchaseInvoiceForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
        this.purchaseInvoiceForm.controls['invoice_purchase_code'].setValue(this.commonService.incrCode('INV',data)); 
        this.purchaseInvoiceForm.controls['invoice_date'].setValue(new Date());
        this.purchaseInvoiceForm.controls['sub_total'].setValue(0.00);
        this.purchaseInvoiceForm.controls['discount'].setValue(0.00);
        this.purchaseInvoiceForm.controls['paid_amount'].setValue(0.00);
        this.purchaseInvoiceForm.controls['balance_amount'].setValue(0.00);
        this.purchaseInvoiceForm.controls['grand_total'].setValue(0.00);
        this.purchaseInvoiceForm.controls['payment_type'].setValue(1);
        this.purchaseInvoiceForm.controls['payment_status'].setValue(1);
        // printJS('print-section', 'html') // print invoice
    })
  }

  saveOrder() {
    console.log(this.purchaseInvoiceForm.value);    
    if(this.purchaseInvoiceForm.invalid){
      this.checkValidity()
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Please fill the mantatory field!'});
      return false;
    }
    this.addPurchase()
  }

 
  onSelectSup(event){
    console.log(event.value); 
    if(event.value == 0){
      this.selectedSupplierData = []
      this.displayDialog3 = true
      this.purchaseInvoiceForm.controls['supplier_details_id'].reset();
      return false
    }else{
      this.selectedSupplierData = _.find(this.suppliers, { '_id': event.value })
    }

  }


  addListItem(){
    const control = <FormArray>this.purchaseInvoiceForm.controls['invoiceList'];
    control.push(this.initRowFirst());
    console.log(control)
  }

  deleteListItem(i){
    const control = <FormArray>this.purchaseInvoiceForm.controls['invoiceList'];
    control.removeAt(i);
    console.log(control)    
    this.calculateTotal()
  }

  onReset() {
    // reset whole form back to initial state   
    // this.purchaseInvoiceForm.reset();
    // this.purchaseInvoiceForm.controls['invoice_purchase_code'].setValue(this.commonService.incrCode('INV',this.customerList.length)); 
    this.purchaseInvoiceForm.controls['invoiceList'].reset()
    this.purchaseInvoiceForm.controls['invoice_date'].setValue(new Date());
    this.purchaseInvoiceForm.controls['sub_total'].setValue(0.00);
    this.purchaseInvoiceForm.controls['discount'].setValue(0.00);
    this.purchaseInvoiceForm.controls['paid_amount'].setValue(0.00);
    this.purchaseInvoiceForm.controls['balance_amount'].setValue(0.00);
    this.purchaseInvoiceForm.controls['grand_total'].setValue(0.00);
}

onClear() {
    // clear errors and reset ticket fields  
}

onSelectProduct(event,i){
  console.log(event.value,i); 
  if(event.value == 0){
    // this.showDialogToAddStock()
    this.displayDialog = true;
    this.purchaseInvoiceForm.get('invoiceList')['controls'][i].reset() 
    return false}
  console.log(this.purchaseInvoiceForm.value.invoiceList);  
  if(this.purchaseInvoiceForm.value.invoiceList.length > 1){
    let stockAddedData = _.find(this.purchaseInvoiceForm.value.invoiceList, { 'stock_details_id': event.value })
    console.log('stockAddedData',stockAddedData); 
    if(stockAddedData.price){
      this.messageService.add({severity:'warn', summary:'Warning!', detail: 'Stock already added in invoice'});
      this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['stock_details_id'].reset() 
      return false
    }
  }
 
  var sliceIndex = _.findIndex(this.stocks, function (o) { return  o._id == event.value; });
  console.log(sliceIndex);
  if (sliceIndex > -1) {
    // this.loggedInUsersList.splice(sliceIndex, 1);
    console.log(this.stocks[sliceIndex]);    
  console.log(this.purchaseInvoiceForm.get('invoiceList')['controls'][i]);
  // this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[sliceIndex].stock_qty) 
  this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(1) 
  this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['total_qty'].setValue(this.stocks[sliceIndex].stock_qty) 
  this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[sliceIndex].selling_price) 
  this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['total'].setValue(1 * this.stocks[sliceIndex].selling_price) 
  this.calculateTotal()
  }
}

onChangeQty(i){
  if(!this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.stock_details_id && this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.stock_details_id  == ''){
     return
  }
  if(this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.qty == 0 || this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.qty == '0'){
    this.messageService.add({severity:'warn', summary:'Warning!', detail: 'Quantity atleast 1'});    
    this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(1) 
    return
  }
  console.log(i); 
  console.log(this.purchaseInvoiceForm.value.invoiceList[i].stock_details_id); 
  console.log(this.stocks); 
  console.log('qty',this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.qty); 
  let stockData = _.find(this.stocks, { '_id': this.purchaseInvoiceForm.value.invoiceList[i].stock_details_id })
  // let stockDataAdded = _.find(this.purchaseInvoiceForm.value.invoiceList, { '_id': this.purchaseInvoiceForm.value.invoiceList[i].stock_details_id })
  console.log(this.stocks[i]); 
  console.log('stockData',stockData);    
  console.log(this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value);
  // this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[i].stock_qty) 
  // this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[i].selling_price) 
  // if(stockData.stock_qty >= this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.qty){
    this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['total'].setValue(this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.qty * this.purchaseInvoiceForm.get('invoiceList')['controls'][i].value.price) 
  // }else{    
  //   this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(1) 
  //   let qty_data = stockData.stock_name + ' has ' + stockData.stock_qty + ' only available!'
  //   this.messageService.add({severity:'error', summary:'Oopss!', detail: qty_data});
  // }
  this.calculateTotal()

}


onChangeDiscount(){
  // this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[i].stock_qty) 
  // this.purchaseInvoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[i].selling_price)    
  this.purchaseInvoiceForm.controls['grand_total'].setValue(this.purchaseInvoiceForm.value.sub_total - this.purchaseInvoiceForm.value.discount)
  // this.calculateTotal()

}

calculateTotal(){

  // subtotal
  var sub_total = 0
  var sub_total  = _.sumBy(this.purchaseInvoiceForm.value.invoiceList, 'total')
  console.log('sub_total1',sub_total);
  
  this.purchaseInvoiceForm.controls['sub_total'].setValue(sub_total)
  this.purchaseInvoiceForm.controls['grand_total'].setValue(sub_total - this.purchaseInvoiceForm.value.discount)

}

onChangePaindAmount(){
  this.purchaseInvoiceForm.controls['balance_amount'].setValue(this.purchaseInvoiceForm.value.grand_total - this.purchaseInvoiceForm.value.paid_amount)
}

receiveSupplier(event){
  console.log(event)   
  this.getSupplierByCompany()
}


receiveStock(event){
  console.log(event)   
  // this.stocksList = [event,...this.stocksList];
  this.getStockByCompany()
}

receiveCategory(event){
  console.log('receiveCategory',event) 
  this.catData = event
}

receiveUnit(event){
  console.log('receiveUnit',event) 
  this.unitData = event
}


onDialogClose(event){
  console.log(event)       
  this.catData = []     // clear new cat data while open stock form
  this.unitData = []  // clear new unit data while open stock form
  this.displayDialog = false;
}

onDialogClose1(event){
  console.log(event)  
  this.displayDialog1 = false;
}

onDialogClose2(event){
  console.log(event) 
  this.displayDialog2 = false;
}

onDialogClose3(event){
  console.log(event) 
  this.displayDialog3 = false;
}

categoryDialog(event){
  console.log('categoryDialog',event)   
  this.displayDialog1 = event;
}

unitDialog(event){
  console.log('unitDialog',event) 
  this.displayDialog2 = event;
}


}
