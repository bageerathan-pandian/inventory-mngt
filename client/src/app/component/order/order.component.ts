import { Component, OnInit, ViewChild } from "@angular/core";
import { MenuItem, MessageService, ConfirmationService } from "primeng/api";
import { Router } from "@angular/router";
import { Order } from 'src/app/model/order.model';
import { Category } from 'src/app/model/category.model';
import { Stock } from 'src/app/model/stock.model';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/shared/customer.service';
import { StockService } from 'src/app/shared/stock.service';
import { CategoryService } from 'src/app/shared/category.service';
import { SalesService } from 'src/app/shared/sales.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Sales } from 'src/app/model/sales.model.';
import { CommonService } from 'src/app/shared/common.service';


import * as _ from 'lodash';
import * as moment from 'moment';
import * as printJS from 'print-js'
import { AuthService } from 'src/app/shared/auth.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { PdfGeneratorService } from 'src/app/shared/pdf-generator.service';

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
  providers: [ConfirmationService]
})
export class OrderComponent implements OnInit {
  public bradCrum: MenuItem[];
  filteredBrands: any[];
  categoryList:Category[];
  stocks:Stock[];
  customers:Customer[];
  stocksList:any = [];
  customerList:any = [];
  cities1: any = [];
  orderList: Order[] = [];
  salesList: Sales[] = [];
  invoiceDate: any = new Date();
  rowData: any = {};
  paymentStatus:any =[];
  paymentType:any =[];
  discountPer:any = [];
  printItems:any = [];
  invoiceForm:FormGroup;
  customerForm: FormGroup
  invoice_id:number;
  customerName:any;
  discount:number = 0.00;
  sub_total:number =0.00;
  grand_total:number = 0.00;
  payment_type:number;
  payment_status:number;
  
  displayDialog: boolean;
  status:any
  pdfUrl:string;
  showPdf:boolean = false;
  
  invoiceArray:any = [];
  @ViewChild("form",{static:false}) form;

  constructor(private _fb:FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService, private customerService: CustomerService,private stockService:StockService,private categoryService: CategoryService,private salesService:SalesService, private commonService: CommonService, private auth: AuthService,
    private pdfGenerator: PdfGeneratorService
  ) {
    // let invalidDate = new Date();
    // this.invalidDates = [invalidDate];
    this.invoiceForm = this._fb.group({
      _id:[''],
      company_details_id: ['',Validators.required],
      invoice_code:['',Validators.required],
      invoice_date:[new Date(),Validators.required],
      customer_details_id:['',Validators.required],
      invoiceList: this._fb.array([
        this.initRowFirst()
      ]),
      sub_total:[0.00],
      discount:[0.00],
      grand_total:[0.00,Validators.required],
      payment_type:['',Validators.required],
      payment_status:['',Validators.required]
    })
    this.customerForm = this._fb.group({
      _id: [''],
      company_details_id: ['',Validators.required],
      customer_code: ['',Validators.required],
      customer_name: ['',Validators.required],
      customer_address: ['',Validators.required],
      phone: ['',Validators.required],
      status: [1,Validators.required]
    })
    
  }

  ngOnInit() {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/dashboard'])}
      },
      {
        label: "Sales",
        command: event => {
          this.router.navigate(["/sales"]);
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
    this.printItems = [
      {label: 'Priview Pdf', icon: 'pi pi-refresh', command: () => {
          this.priviewPdf();
      }},
      {label: 'Priview Print', icon: 'pi pi-times', command: () => {
        this.printOrder();
      }}
  ];

    this.orderList = [];
    this.getLastInvoice();
    this.getCustomer();
    this.getCategory();
    this.getStock();
       
    this.invoiceForm.controls['company_details_id'].setValue(this.auth.getUserData().company_details_id._id)
  }

  @ViewChild("placesRef",{static:false}) placesRef : GooglePlaceDirective;
    
  public handleAddressChange(address: Address) {
    console.log('address',address);
  // Do some stuff
  this.customerForm.controls['customer_address'].setValue(address.formatted_address);
}

public checkValidity(): void {
  Object.keys(this.invoiceForm.controls).forEach((key) => {
    console.log('key',key)
      this.invoiceForm.controls[key].markAsDirty();
  });
  Object.keys(this.invoiceForm.get('invoiceList')['controls']).forEach((key1) => {
    console.log('key1',key1)
    Object.keys(this.invoiceForm.get('invoiceList')['controls'][key1].controls).forEach((key2) => {
      console.log('key2',key2)
      console.log('invoiceList',this.invoiceForm.get('invoiceList')['controls'][key1].controls[key2])
      this.invoiceForm.get('invoiceList')['controls'][key1].controls[key2].markAsDirty();
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
    this.showPdf = true
    this.pdfUrl = data;
    // window.open(data, "_blank");
  })
}

printOrder(){
  console.log('printOrder',this.pdfUrl)
  printJS('docs/'+this.pdfUrl)
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

  getLastInvoice(){
    this.salesService.getLastInvoice()
    .subscribe((data:any)=>{
      console.log('getLastInvoice',data);
      
    this.invoiceForm.controls['invoice_code'].setValue(this.commonService.incrCode('INV',data)); 
    },
    error =>{      
    this.invoiceForm.controls['invoice_code'].setValue(this.commonService.incrCode('INV',0)); 
    })
  }

  getCustomer(){

    this.customerService.getCustomer()
    .subscribe((data:any)=>{
      this.customers = data;
      for(let custData of this.customers){
        let listCust =  {
          label:custData.customer_name +' | '+ custData.customer_code,
          value:custData._id
        }
        this.customerList.push(listCust);
      }
      console.log('customerList',this.customerList);
    })
  }

   getCategory(){
    this.categoryService.getCategoryByCompany(this.auth.getUserCompanyId())
    .subscribe((data:any)=>{
      console.log('categoryList',data);
      this.categoryList = data;
    })
  }

  getStock(){
    this.stockService.getStockByCompanyActive(this.auth.getUserCompanyId())
    .subscribe((data:any)=>{
      console.log('stocksList',data);
      this.stocks = data;      
        // this.stocksList = data;
      for(let stockData of this.stocks){
        let listStock=  {
          label:stockData.stock_name + ' | ' + stockData.stock_code,
          value:stockData._id
        }
        this.stocksList.push(listStock);
      }
    })
   
  }



  addSales(){ 
    console.log('invoiceArray',this.invoiceForm.value);
    this.salesService.addSales(this.invoiceForm.value)
    .subscribe((data:any)=>{
        console.log(data);
        this.invoiceForm.reset();
        this.invoiceForm.controls['invoice_code'].setValue(this.commonService.incrCode('INV',data)); 
        this.invoiceForm.controls['invoice_date'].setValue(new Date());
        this.invoiceForm.controls['sub_total'].setValue(0.00);
        this.invoiceForm.controls['discount'].setValue(0.00);
        this.invoiceForm.controls['grand_total'].setValue(0.00);
    })
  }

  saveOrder() {
    console.log(this.invoiceForm.value);    
    if(this.invoiceForm.invalid){
      this.checkValidity()
      return false;
    }
    this.addSales()
  }

  showDialogToAddCust(){
    this.customerForm.reset();
    this.customerForm.controls['customer_code'].setValue(this.commonService.incrCode('c',this.customerList.length));
    this.customerForm.controls['status'].setValue(1);
    this.customerForm.controls['company_details_id'].setValue(this.auth.getUserData().company_details_id._id)
    this.displayDialog = true;
  }

  saveCust() {
    if(this.customerForm.invalid){
      this.checkValidityCus()
      return false;
    }
    this.customerService.addCustomer(this.customerForm.value)
    .subscribe((data:any)=>{
      console.log('add customer',data);
      let newData = {
        label : data.customer_name +' | ' +data.customer_code,
        value : data._id
       }
      this.customerList = [ newData,...this.customerList];
    
      console.log('this.customerList',this.customerList);
      this.messageService.add({severity:'success', summary:'Customer Added Successfully', detail:'Customer Added Successfully'});
      this.invoiceForm.controls['customer_details_id'].setValue(data._id) 
      this.displayDialog = false;
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }

  addListItem(){
    const control = <FormArray>this.invoiceForm.controls['invoiceList'];
    control.push(this.initRowFirst());
    console.log(control)
  }

  deleteListItem(i){
    const control = <FormArray>this.invoiceForm.controls['invoiceList'];
    control.removeAt(i);
    console.log(control)
  }

  onReset() {
    // reset whole form back to initial state
    this.invoiceForm.reset();
    // this.invoiceForm.controls['invoice_code'].setValue(this.commonService.incrCode('INV',data)); 
    this.invoiceForm.controls['invoice_date'].setValue(new Date());
    this.invoiceForm.controls['sub_total'].setValue(0.00);
    this.invoiceForm.controls['discount'].setValue(0.00);
    this.invoiceForm.controls['grand_total'].setValue(0.00);
}

onClear() {
    // clear errors and reset ticket fields    
    this.orderList = [];
}

onSelectProduct(event,i){
  console.log(event.value);
  var sliceIndex = _.findIndex(this.stocks, function (o) { return  o._id == event.value; });
  console.log(sliceIndex);
  if (sliceIndex > -1) {
    // this.loggedInUsersList.splice(sliceIndex, 1);
    console.log(this.stocks[sliceIndex]);    
  console.log(this.invoiceForm.get('invoiceList')['controls'][i]);
  // this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[sliceIndex].stock_qty) 
  this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(1) 
  this.invoiceForm.get('invoiceList')['controls'][i].controls['total_qty'].setValue(this.stocks[sliceIndex].stock_qty) 
  this.invoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[sliceIndex].selling_price) 
  this.invoiceForm.get('invoiceList')['controls'][i].controls['total'].setValue(1 * this.stocks[sliceIndex].selling_price) 
  this.calculateTotal()
  }
}

onChangeQty(i){
  if(!this.invoiceForm.get('invoiceList')['controls'][i].value.stock_details_id && this.invoiceForm.get('invoiceList')['controls'][i].value.stock_details_id  == ''){
     return
  }
  console.log(i); 
  console.log('qty',this.invoiceForm.get('invoiceList')['controls'][i].value.qty); 
  console.log(this.stocks[i]);    
  console.log(this.invoiceForm.get('invoiceList')['controls'][i].value);
  // this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[i].stock_qty) 
  // this.invoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[i].selling_price) 
  if(this.stocks[i].stock_qty >= this.invoiceForm.get('invoiceList')['controls'][i].value.qty){
    this.invoiceForm.get('invoiceList')['controls'][i].controls['total'].setValue(this.invoiceForm.get('invoiceList')['controls'][i].value.qty * this.stocks[i].selling_price) 
  }else{    
    this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue('') 
    let qty_data = this.stocks[i].stock_name + ' has ' + this.stocks[i].stock_qty + ' only available!'
    this.messageService.add({severity:'error', summary:'Oopss!', detail: qty_data});
  }
  this.calculateTotal()

}


onChangeDiscount(){
  // this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[i].stock_qty) 
  // this.invoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[i].selling_price)    
  this.invoiceForm.controls['grand_total'].setValue(this.invoiceForm.value.sub_total - this.invoiceForm.value.discount)
  // this.calculateTotal()

}

calculateTotal(){

  // subtotal
  var sub_total = 0
  var sub_total  = _.sumBy(this.invoiceForm.value.invoiceList, 'total')
  console.log('sub_total1',sub_total);
  
  this.invoiceForm.controls['sub_total'].setValue(sub_total)
  this.invoiceForm.controls['grand_total'].setValue(sub_total - this.invoiceForm.value.discount)

}




}
