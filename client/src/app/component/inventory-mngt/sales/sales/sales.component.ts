import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MenuItem, MessageService, ConfirmationService } from "primeng/api";
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from "@angular/router";
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
import * as printJS from 'print-js'
import { AuthLoginService } from 'src/app/shared/auth.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { PdfGeneratorService } from 'src/app/shared/pdf-generator.service';
import { SessionService } from 'src/app/shared/session.service';
import { environment } from 'src/environments/environment';
import { isValidDate } from '@fullcalendar/core';
import { InvoiceService } from 'src/app/shared/invoice.service';


@Component({
  selector: "app-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.scss"],
  providers: [ConfirmationService]
})
export class SalesComponent implements OnInit {
  public bradCrum: MenuItem[];
  filteredBrands: any[];
  categoryList: Category[];
  stocks: Stock[];
  customers: Customer[];
  stocksList: any = [];
  customerList: any = [];
  cities1: any = [];
  salesList: Sales[] = [];
  invoiceDate: any = new Date();
  rowData: any = {};
  paymentStatus: any = [];
  paymentType: any = [];
  discountPer: any = [];
  invoiceForm: FormGroup;
  customerForm: FormGroup
  invoice_id: number;
  customerName: any;
  discount: number = 0.00;
  sub_total: number = 0.00;
  grand_total: number = 0.00;
  payment_type: number;
  payment_status: number;

  status: any
  pdfUrl: string;
  showPdf: boolean = false;

  displayDialog: boolean;
  displayDialog1: boolean;
  displayDialog2: boolean;
  displayDialog3: boolean;
  displayDialog4: boolean;

  stockData: any = [] // pass data to another component
  catData: any = [] // pass data to another component
  unitData: any = [] // pass data to another component
  taxData: any = [] // pass data to another component

  invoiceArray: any = [];
  @ViewChild("form", { static: false }) form;
  @ViewChild('printDiv', { static: false }) printDiv: ElementRef;
  selectedCustData: any = []
  invoiceData: any
  customerData: any
  today: any = new Date()
  stocksListResult: any = []
  salesId: string

  constructor(private _fb: FormBuilder,
    private router: Router,
    private messageService: MessageService, private customerService: CustomerService, private stockService: StockService, private categoryService: CategoryService, private salesService: SalesService, private commonService: CommonService, private auth: AuthLoginService,
    private pdfGenerator: PdfGeneratorService, public sessionService: SessionService, private activeRoute: ActivatedRoute, private invoiceService: InvoiceService
  ) {

    this.activeRoute.params.subscribe(
      (params: Params) => {
        console.log(params.id)
        this.salesId = params.id
      }
    );

    // let invalidDate = new Date();
    // this.invalidDates = [invalidDate];


  }

  ngOnInit() {
    if (this.salesId) {
      this.bradCrum = [
        {
          label: '', icon: 'pi pi-home', command: (event) => {
            this.router.navigate(['/inventory-mngt/dashboard'])
          }
        },
        {
          label: "Payment",
          command: event => {
            this.router.navigate(["/inventory-mngt/payment"]);
          }
        },
        {
          label: "Edit Invoice",
        },
        {
          label: null,
        }
      ];
    } else {
      this.bradCrum = [
        {
          label: '', icon: 'pi pi-home', command: (event) => {
            this.router.navigate(['/inventory-mngt/dashboard'])
          }
        },
        {
          label: "Sales",
          command: event => {
            this.router.navigate(["/inventory-mngt/sales"]);
          }
        }
      ];
    }


    this.status = [
      { label: 'Active', value: 1 },
      { label: 'De-Active', value: 0 },
    ]

    this.paymentType = [
      { label: 'Cash', value: 1 },
      { label: 'Card', value: 2 },
    ]
    this.paymentStatus = [
      { label: 'Paid', value: 1 },
      { label: 'Pending', value: 2 },
      { label: 'Collection', value: 3 },
    ]
    this.discountPer = [
      { label: '5%', value: 1 },
      { label: '10%', value: 2 }
    ]
    this.createSalesForm()
    this.getCustomerByCompany();
    this.getCategoryByCompany();
    this.getStockByCompany();
    if (this.salesId) {
      this.getInvoiceById()
    } else {
      this.getLastInvoiceByCompany();
    }

    this.invoiceForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
  }

  @ViewChild("placesRef", { static: false }) placesRef: GooglePlaceDirective;

  public handleAddressChange(address: Address) {
    console.log('address', address);
    // Do some stuff
    this.customerForm.controls['customer_address'].setValue(address.formatted_address);
  }

  public checkValidity(): void {
    Object.keys(this.invoiceForm.controls).forEach((key) => {
      console.log('key', key)
      this.invoiceForm.controls[key].markAsDirty();
    });
    Object.keys(this.invoiceForm.get('invoiceList')['controls']).forEach((key1) => {
      console.log('key1', key1)
      Object.keys(this.invoiceForm.get('invoiceList')['controls'][key1].controls).forEach((key2) => {
        console.log('key2', key2)
        console.log('invoiceList', this.invoiceForm.get('invoiceList')['controls'][key1].controls[key2])
        this.invoiceForm.get('invoiceList')['controls'][key1].controls[key2].markAsDirty();
      });
    });
  }

  public checkValidityCus(): void {
    Object.keys(this.customerForm.controls).forEach((key) => {
      this.customerForm.controls[key].markAsDirty();
    });
  }

  createSalesForm() {
    this.invoiceForm = this._fb.group({
      _id: [''],
      company_details_id: [this.sessionService.getItem('company_id'), Validators.required],
      invoice_code: ['', Validators.required],
      invoice_date: [new Date(), Validators.required],
      customer_details_id: ['', Validators.required],
      customer_details_id_total_purchase_amt: [0.00, Validators.required],
      customer_details_id_total_paid_amt: [0.00, Validators.required],
      customer_details_id_total_pending_amt: [0.00, Validators.required],
      invoiceList: this._fb.array([
        this.initRowFirst()
      ]),
      sub_total: [0.00],
      discount: [0.00],
      round_off: [0.00],
      grand_total: [0.00, Validators.required],
      befor_grand_total: [0.00],
      cgst: [0.00],
      sgst: [0.00],
      tax_enable: [true],
      payment_type: [1, Validators.required],
      paid_amount: [0.00, Validators.required],
      befor_paid_amount: [0.00],
      balance_amount: [0.00, Validators.required],
      payment_status: [2, Validators.required]
    })

  }

  priviewPdf() {
    this.pdfGenerator.testPdg()
      .subscribe((data: any) => {
        console.log('testPdf', data);
        console.log('url', environment.api_url + data);
        // printJS('docs/'+ environment.api_url + data)
        // printJS({ printable: 'docs/' + environment.api_url + data + "'", type: 'pdf', showModal: true })
      })
  }

  printOrder() {

    // let elementCopy = this.printDiv(true);
    // this.printDiv.nativeElement.appendChild();
    // document.body.appendChild(this.printDiv.nativeElement);

    // window.print();

    // printJS('print-section', 'html')
  }

  printOrderWithoutView() {

  }

  initRowFirst(data?: any) {
    console.log(data)
    return this._fb.group({
      stock_details_id: [data ? data.stock_details_id : '', Validators.required],
      stock_name: [data ? data.stock_name : '', Validators.required],
      price: [data ? data.price : '', Validators.required],
      mrp: [data ? data.mrp : '', Validators.required],
      qty: [data ? data.qty : '', Validators.required],
      befor_qty: [data ? data.qty : ''],
      total_qty: [data ? data.total_qty : '', Validators.required],
      tax_name: [data ? data.tax_name : '', Validators.required],
      cgst_amt: [data ? data.cgst_amt : 0.00, Validators.required],
      sgst_amt: [data ? data.sgst_amt : 0.00, Validators.required],
      gst_per: [data ? data.gst_per : '', Validators.required],
      total: [data ? data.total : '', Validators.required],
      total_with_gst: [data ? data.total_with_gst : '', Validators.required]
    });
  }

  getInvoiceById() {
    this.invoiceService.getInvoiceById(this.salesId)
      .subscribe((data: any) => {
        console.log('getInvoiceById', data);
        this.bradCrum[3].label = data[0].invoice_code ? data[0].invoice_code : null;
        this.selectedCustData = _.find(this.customers, { '_id': data[0].customer_details_id })
        this.invoiceForm.patchValue({
          _id: this.salesId,
          invoice_code: data[0].invoice_code,
          invoice_date: new Date(data[0].invoice_date),
          customer_details_id: data[0].customer_details_id,
          customer_details_id_total_paid_amt: this.selectedCustData ? this.selectedCustData.total_paid_amt : 0,
          customer_details_id_total_pending_amt: this.selectedCustData ? this.selectedCustData.total_pending_amt : 0,
          customer_details_id_total_purchase_amt: this.selectedCustData ? this.selectedCustData.total_purchase_amt : 0,
          discount: data[0].discount ? data[0].discount : 0,
          grand_total: data[0].grand_total,
          befor_grand_total: data[0].grand_total,
          paid_amount: data[0].paid_amount ? data[0].paid_amount : 0,
          payment_status: data[0].payment_status,
          payment_type: data[0].payment_type,
          round_off: data[0].round_off ? data[0].round_off : 0,
          sgst: data[0].sgst,
          cgst: data[0].cgst,
          sub_total: data[0].sub_total,
          tax_enable: data[0].tax_enable,
        })
        // this.invoiceForm.controls['invoice_code'].setValue(data[0].invoice_code);
        const control = <FormArray>this.invoiceForm.controls['invoiceList'];
        control.removeAt(0);
        data[0].invoice_list.forEach(element => {
          // this.initRowFirst(element)
          
          var foundIndex = this.stocks.findIndex(x => x._id == element.stock_details_id);
          this.stocks[foundIndex].stock_qty += element.qty;
          let selectedProdData = _.find(this.stocks, { '_id': element.stock_details_id })
          let listStock = {
            label: selectedProdData.stock_name + ' | ' + selectedProdData.stock_code + ' (' + selectedProdData.stock_qty + ')',
            value: selectedProdData._id
          }
          element.stock_details_id = listStock;
          control.push(this.initRowFirst(element));
        });
      },
        error => {
        })
  }

  getLastInvoiceByCompany() {
    this.salesService.getLastInvoice()
      .subscribe((data: any) => {
        console.log('getLastInvoice', data);
        // this.createSalesForm()
        this.invoiceForm.controls['invoice_code'].setValue(this.commonService.incrCode('INV', data));
      },
        error => {
          this.invoiceForm.controls['invoice_code'].setValue(this.commonService.incrCode('INV', 0));
        })
  }

  getCustomerByCompany() {
    this.customerList = []
    this.customerService.getCustomerByCompany()
      .subscribe((data: any) => {
        this.customers = data;
        this.customerList.push({ label: '+ Add New Customer', value: 0 });
        for (let custData of this.customers) {
          let listCust = {
            label: custData.customer_name + ' | ' + custData.customer_code,
            value: custData._id
          }
          this.customerList.push(listCust);
        }
        console.log('customerList', this.customerList);
      })
  }

  getCategoryByCompany() {
    this.categoryService.getCategoryByCompany()
      .subscribe((data: any) => {
        console.log('categoryList', data);
        this.categoryList = data;
      })
  }

  getStockByCompany() {
    this.stocks = [];
    this.stocksList = [];
    if (this.salesId) {
      this.stockService.getStockByCompany()
        .subscribe((data: any) => {
          console.log('stocksList', data);
          this.stocks = data;
          // this.stocksList = data;
          // this.stocksList.push({ label: '+ Add New Stock', value: 0 });
          for (let stockData of this.stocks) {
            let listStock = {
              label: stockData.stock_name + ' | ' + stockData.stock_code + ' (' + stockData.stock_qty + ')',
              value: stockData._id
            }
            this.stocksList.push(listStock);
          }
        })

    } else {
      this.stockService.getStockByCompanyActive()
        .subscribe((data: any) => {
          console.log('stocksList', data);
          this.stocks = data;
          // this.stocksList = data;
          // this.stocksList.push({ label: '+ Add New Stock', value: 0 });
          for (let stockData of this.stocks) {
            let listStock = {
              label: stockData.stock_name + ' | ' + stockData.stock_code + ' (' + stockData.stock_qty + ')',
              value: stockData._id
            }
            this.stocksList.push(listStock);
          }
        })
    }
  }



  addSales() {
    console.log('invoiceArray', this.invoiceForm.value);
    this.invoiceForm.get('customer_details_id').setValue(this.selectedCustData._id)
    this.invoiceForm.get('invoiceList')['controls'].forEach(element => {
      console.log(element.controls['stock_details_id'].value)
      element.controls['stock_details_id'].setValue(element.controls['stock_details_id'].value.value)
    });
    this.salesService.addSales(this.invoiceForm.value)
      .subscribe((data: any) => {
        console.log(data);
        this.invoiceData = data.data[0];
        this.getStockByCompany() // refresh stock qty
        this.invoiceForm.reset();
        this.selectedCustData = []
        this.invoiceForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
        this.invoiceForm.controls['invoice_code'].setValue(this.commonService.incrCode('INV', data.next_invoice));
        this.invoiceForm.controls['invoice_date'].setValue(new Date());
        this.invoiceForm.controls['invoiceList'].reset()
        const control = <FormArray>this.invoiceForm.controls['invoiceList'];
        control.clear();
        control.push(this.initRowFirst());
        this.invoiceForm.controls['sub_total'].setValue(0.00);
        this.invoiceForm.controls['discount'].setValue(0.00);
        this.invoiceForm.controls['paid_amount'].setValue(0.00);
        this.invoiceForm.controls['balance_amount'].setValue(0.00);
        this.invoiceForm.controls['grand_total'].setValue(0.00);
        this.invoiceForm.controls['cgst'].setValue(0.00);
        this.invoiceForm.controls['sgst'].setValue(0.00);
        this.invoiceForm.controls['payment_type'].setValue(1);
        this.invoiceForm.controls['payment_status'].setValue(1);
        this.invoiceForm.controls['tax_enable'].setValue(true);



        setTimeout(() => {
          var divToPrint = document.getElementById('print-section');
          var mywindow = window.open('', 'new div', 'height=600,width=900');
          mywindow.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
          mywindow.document.close();
          //   printJS({
          //     printable: 'print-section',
          //     type: 'html',
          //     targetStyles: ['width'],
          //     style: ' #print-section { visibility: visible!important; } ',
          //   })
        }, 1000);
      })
  }

  
  updateSales() {
    console.log('invoiceArray', this.invoiceForm.value);
    this.invoiceForm.get('customer_details_id').setValue(this.selectedCustData._id)
    this.invoiceForm.get('invoiceList')['controls'].forEach(element => {
      console.log(element.controls['stock_details_id'].value)
      element.controls['stock_details_id'].setValue(element.controls['stock_details_id'].value.value)
    });
    this.salesService.updateSales(this.invoiceForm.value)
      .subscribe((data: any) => {
        console.log(data);
        this.invoiceData = data.data[0];
        this.getStockByCompany() // refresh stock qty
        this.invoiceForm.reset();
        this.selectedCustData = []
        this.invoiceForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
        this.invoiceForm.controls['invoice_code'].setValue(this.commonService.incrCode('INV', data.next_invoice));
        this.invoiceForm.controls['invoice_date'].setValue(new Date());
        this.invoiceForm.controls['invoiceList'].reset()
        const control = <FormArray>this.invoiceForm.controls['invoiceList'];
        control.clear();
        control.push(this.initRowFirst());
        this.invoiceForm.controls['sub_total'].setValue(0.00);
        this.invoiceForm.controls['discount'].setValue(0.00);
        this.invoiceForm.controls['paid_amount'].setValue(0.00);
        this.invoiceForm.controls['balance_amount'].setValue(0.00);
        this.invoiceForm.controls['grand_total'].setValue(0.00);
        this.invoiceForm.controls['cgst'].setValue(0.00);
        this.invoiceForm.controls['sgst'].setValue(0.00);
        this.invoiceForm.controls['payment_type'].setValue(1);
        this.invoiceForm.controls['payment_status'].setValue(1);
        this.invoiceForm.controls['tax_enable'].setValue(true);

        setTimeout(() => {
          var divToPrint = document.getElementById('print-section');
          var mywindow = window.open('', 'new div', 'height=600,width=900');
          mywindow.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
          mywindow.document.close();
          this.router.navigate(['/inventory-mngt/payment'])
          //   printJS({
          //     printable: 'print-section',
          //     type: 'html',
          //     targetStyles: ['width'],
          //     style: ' #print-section { visibility: visible!important; } ',
          //   })
        }, 1000);
      })
  }

  printPriview() {

    let invoiceData = this.invoiceForm.value;
    invoiceData.invoice_list = invoiceData.invoiceList;
    invoiceData.customer_details_id = {
      customer_code: this.selectedCustData.customer_code,
      customer_name: this.selectedCustData.customer_name,
      customer_address: this.selectedCustData.customer_address,
      phone: this.selectedCustData.phone,
      customer_gstin: this.selectedCustData.customer_gstin,
      route_name: this.selectedCustData.route_name,
    }
    this.invoiceData = invoiceData;

    setTimeout(() => {
      var divToPrint = document.getElementById('print-section');
      var mywindow = window.open('', 'new div', 'height=600,width=900');
      mywindow.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
      mywindow.document.close();
      // printJS({
      //   printable: 'print-section',
      //   type: 'html',
      //   targetStyles: ['width'],
      //   style: ' #print-section { visibility: visible!important; } ',
      // })
    }, 1000);

  }

  saveOrder() {
    console.log(this.invoiceForm.value);
    if (this.invoiceForm.invalid) {
      this.checkValidity()
      this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Please fill the mantatory field!' });
      return false;
    }
    if(this.salesId){
      this.updateSales()
    }else{
      this.addSales()
    }
  }


  onSelectCust(event) {
    console.log(event.value);
    if (event.value == 0) {
      this.selectedCustData = []
      this.displayDialog3 = true
      this.invoiceForm.controls['customer_details_id'].reset();
      return false
    } else {
      this.selectedCustData = _.find(this.customers, { '_id': event.value })
      this.invoiceForm.get('tax_enable').setValue(this.selectedCustData.enable_tax ? this.selectedCustData.enable_tax : false)
      this.invoiceForm.get('customer_details_id_total_purchase_amt').setValue(this.selectedCustData.total_purchase_amt ? this.selectedCustData.total_purchase_amt : 0)
      this.invoiceForm.get('customer_details_id_total_paid_amt').setValue(this.selectedCustData.total_paid_amt ? this.selectedCustData.total_paid_amt : 0)
      this.invoiceForm.get('customer_details_id_total_pending_amt').setValue(this.selectedCustData.total_pending_amt ? this.selectedCustData.total_pending_amt : 0)
      this.calculateTotal()
    }

  }


  addListItem() {
    if (this.invoiceForm.controls['invoiceList'].invalid) {
      this.checkValidity()
      this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Please fill the mantatory field!' });
      return false;
    }
    const control = <FormArray>this.invoiceForm.controls['invoiceList'];
    control.push(this.initRowFirst());
    console.log(control)
  }

  deleteListItem(i) {
    const control = <FormArray>this.invoiceForm.controls['invoiceList'];
    control.removeAt(i);
    console.log(control)
    this.calculateTotal()
  }

  onReset() {
    // reset whole form back to initial state   
    // this.invoiceForm.reset();
    // this.invoiceForm.controls['invoice_code'].setValue(this.commonService.incrCode('INV',this.customerList.length)); 
    this.selectedCustData = []
    this.invoiceForm.controls['invoiceList'].reset()
    const control = <FormArray>this.invoiceForm.controls['invoiceList'];
    control.clear();
    control.push(this.initRowFirst());
    this.invoiceForm.controls['invoice_date'].setValue(new Date());
    this.invoiceForm.controls['sub_total'].setValue(0.00);
    this.invoiceForm.controls['discount'].setValue(0.00);
    this.invoiceForm.controls['paid_amount'].setValue(0.00);
    this.invoiceForm.controls['balance_amount'].setValue(0.00);
    this.invoiceForm.controls['grand_total'].setValue(0.00);
    this.invoiceForm.controls['sub_total'].setValue(0.00);
    this.invoiceForm.controls['discount'].setValue(0.00);
    this.invoiceForm.controls['cgst'].setValue(0.00);
    this.invoiceForm.controls['sgst'].setValue(0.00);
    this.invoiceForm.controls['tax_enable'].setValue(true);
  }

  onClear() {
    // clear errors and reset ticket fields  
  }

  searchProduct(event) {
    // this.mylookupservice.getResults(event.query).then(data => {
    //     this.results = data;
    // });
    this.stocksListResult = this.stocksList.filter(item => item.label.toLowerCase().indexOf(event.query) >= 0)
    this.stocksListResult.unshift({ label: '+ Add New Stock', value: 0 });
  }

  onSelectProduct(event, i) {
    console.log(event.value, i);
    if (event.value == 0) {
      // this.showDialogToAddStock()
      this.displayDialog = true;
      this.invoiceForm.get('invoiceList')['controls'][i].reset()
      return false
    }
    console.log(this.invoiceForm.value.invoiceList);
    if (this.invoiceForm.value.invoiceList.length > 1) {
      let cloneInvoiceList = this.invoiceForm.value.invoiceList.slice();
      cloneInvoiceList.splice(i, 1); // to remove selected row
      let stockAddedData = _.find(cloneInvoiceList, { 'stock_details_id': { value: event.value } })
      console.log('stockAddedData', stockAddedData);
      if (stockAddedData) {
        this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Stock already added in invoice' });
        this.invoiceForm.get('invoiceList')['controls'][i].controls['stock_details_id'].reset()
        return false
      }
    }

    var sliceIndex = _.findIndex(this.stocks, function (o) { return o._id == event.value; });
    console.log(sliceIndex);
    if (sliceIndex > -1) {
      // this.loggedInUsersList.splice(sliceIndex, 1);
      console.log(this.stocks[sliceIndex]);
      console.log(this.invoiceForm.get('invoiceList')['controls'][i]);
      // this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[sliceIndex].stock_qty) 
      this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(1)
      this.invoiceForm.get('invoiceList')['controls'][i].controls['stock_name'].setValue(this.stocks[sliceIndex].stock_name)
      this.invoiceForm.get('invoiceList')['controls'][i].controls['total_qty'].setValue(this.stocks[sliceIndex].stock_qty)
      this.invoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[sliceIndex].selling_price)
      this.invoiceForm.get('invoiceList')['controls'][i].controls['mrp'].setValue(this.stocks[sliceIndex].mrp)
      this.invoiceForm.get('invoiceList')['controls'][i].controls['tax_name'].setValue(this.stocks[sliceIndex].tax_details_id.tax_name)
      let cgst_amt = Number(this.stocks[sliceIndex].selling_price) * (Number(this.stocks[sliceIndex].tax_details_id.tax_value_cgst) / 100);
      this.invoiceForm.get('invoiceList')['controls'][i].controls['cgst_amt'].setValue(cgst_amt);
      let sgst_amt = Number(this.stocks[sliceIndex].selling_price) * (Number(this.stocks[sliceIndex].tax_details_id.tax_value_sgst) / 100);
      this.invoiceForm.get('invoiceList')['controls'][i].controls['sgst_amt'].setValue(sgst_amt)
      let gst_pet = Number(this.stocks[sliceIndex].tax_details_id.tax_value_cgst) + Number(this.stocks[sliceIndex].tax_details_id.tax_value_sgst)
      this.invoiceForm.get('invoiceList')['controls'][i].controls['gst_per'].setValue(gst_pet)
      this.invoiceForm.get('invoiceList')['controls'][i].controls['total'].setValue(1 * this.stocks[sliceIndex].selling_price)
      let total_amt_with_gst = ((1 * this.stocks[sliceIndex].selling_price) * gst_pet / 100) + this.stocks[sliceIndex].selling_price;
      this.invoiceForm.get('invoiceList')['controls'][i].controls['total_with_gst'].setValue(total_amt_with_gst)
      this.calculateTotal()
    }
  }

  onChangeQty(i) {
    if (!this.invoiceForm.get('invoiceList')['controls'][i].value.stock_details_id && this.invoiceForm.get('invoiceList')['controls'][i].value.stock_details_id == '') {
      return
    }
    if (this.invoiceForm.get('invoiceList')['controls'][i].value.qty == 0 || this.invoiceForm.get('invoiceList')['controls'][i].value.qty == '0') {
      this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Quantity atleast 1' });
      this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(1)
      return
    }
    console.log(i);
    console.log(this.invoiceForm.value.invoiceList[i].stock_details_id.value);
    console.log(this.stocks);
    console.log('qty', this.invoiceForm.get('invoiceList')['controls'][i].value.qty);
    let stockData = _.find(this.stocks, { '_id': this.invoiceForm.value.invoiceList[i].stock_details_id.value })
    // let stockDataAdded = _.find(this.invoiceForm.value.invoiceList, { '_id': this.invoiceForm.value.invoiceList[i].stock_details_id })
    console.log(this.stocks[i]);
    console.log('stockData', stockData);
    console.log(this.invoiceForm.get('invoiceList')['controls'][i].value);
    // this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(this.stocks[i].stock_qty) 
    // this.invoiceForm.get('invoiceList')['controls'][i].controls['price'].setValue(this.stocks[i].selling_price) 
    if (stockData.stock_qty >= this.invoiceForm.get('invoiceList')['controls'][i].value.qty) {
      this.invoiceForm.get('invoiceList')['controls'][i].controls['total'].setValue(this.invoiceForm.get('invoiceList')['controls'][i].value.qty * this.invoiceForm.get('invoiceList')['controls'][i].value.price)

      let cgst_amt = Number(this.invoiceForm.get('invoiceList')['controls'][i].value.total) * (Number(this.stocks[i].tax_details_id.tax_value_cgst) / 100);
      this.invoiceForm.get('invoiceList')['controls'][i].controls['cgst_amt'].setValue(cgst_amt);
      let sgst_amt = Number(this.invoiceForm.get('invoiceList')['controls'][i].value.total) * (Number(this.stocks[i].tax_details_id.tax_value_sgst) / 100);
      this.invoiceForm.get('invoiceList')['controls'][i].controls['sgst_amt'].setValue(sgst_amt)
      let total_amt_with_gst = this.invoiceForm.get('invoiceList')['controls'][i].value.total * (this.invoiceForm.get('invoiceList')['controls'][i].value.gst_per / 100) + this.invoiceForm.get('invoiceList')['controls'][i].value.total;
      this.invoiceForm.get('invoiceList')['controls'][i].controls['total_with_gst'].setValue(total_amt_with_gst)
    } else {
      this.invoiceForm.get('invoiceList')['controls'][i].controls['qty'].setValue(1)
      let qty_data = stockData.stock_name + ' has ' + stockData.stock_qty + ' only available!'
      this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: qty_data });
    }
    this.calculateTotal()

  }


  onChangeDiscount() {
    if (this.invoiceForm.value.tax_enable) {
      let grand_total = (this.invoiceForm.value.sub_total - this.invoiceForm.value.discount) + this.invoiceForm.value.cgst + this.invoiceForm.value.sgst;
      let round_off_total = Math.round(grand_total)
      let round_off_amt = round_off_total - grand_total
      this.invoiceForm.controls['round_off'].setValue(round_off_amt)
      this.invoiceForm.controls['grand_total'].setValue(round_off_total)
    } else {
      let grand_total = this.invoiceForm.value.sub_total - this.invoiceForm.value.discount;
      let round_off_total = Math.round(grand_total)
      let round_off_amt = round_off_total - grand_total
      this.invoiceForm.controls['round_off'].setValue(round_off_amt)
      this.invoiceForm.controls['grand_total'].setValue(round_off_total)
    }
  }

  toggleTax(event) {
    if (this.invoiceForm.controls['grand_total'].value == 0) {
      return false
    }
    this.calculateTotal()
  }

  calculateTotal() {

    // subtotal
    var sub_total = 0
    var sub_total = _.sumBy(this.invoiceForm.value.invoiceList, 'total')
    console.log('sub_total1', sub_total);

    this.invoiceForm.controls['sub_total'].setValue(sub_total)

    // cgst_total
    var cgst_total = 0
    var cgst_total = _.sumBy(this.invoiceForm.value.invoiceList, 'cgst_amt')
    this.invoiceForm.controls['cgst'].setValue(cgst_total)

    // sgst_total
    var sgst_total = 0
    var sgst_total = _.sumBy(this.invoiceForm.value.invoiceList, 'sgst_amt')
    this.invoiceForm.controls['sgst'].setValue(sgst_total)

    if (this.invoiceForm.value.tax_enable) {
      let grand_total = (sub_total - this.invoiceForm.value.discount) + cgst_total + sgst_total;
      let round_off_total = Math.round(grand_total)
      let round_off_amt = round_off_total - grand_total
      this.invoiceForm.controls['round_off'].setValue(round_off_amt)
      this.invoiceForm.controls['grand_total'].setValue(round_off_total)
    } else {
      let grand_total = sub_total - this.invoiceForm.value.discount;
      let round_off_total = Math.round(grand_total)
      let round_off_amt = round_off_total - grand_total
      this.invoiceForm.controls['round_off'].setValue(round_off_amt)
      this.invoiceForm.controls['grand_total'].setValue(round_off_total)
    }

  }


  onChangePaindAmount() {
    this.invoiceForm.controls['balance_amount'].setValue(this.invoiceForm.value.grand_total - this.invoiceForm.value.paid_amount)
  }



  receiveStock(event) {
    console.log(event)
    // this.stocksList = [event,...this.stocksList];
    this.getStockByCompany()
  }

  receiveCategory(event) {
    console.log('receiveCategory', event)
    this.catData = event
  }

  receiveUnit(event) {
    console.log('receiveUnit', event)
    this.unitData = event
  }

  receiveTax(event) {
    console.log('receiveTax', event)
    this.taxData = event
  }

  receiveCustomer(event) {
    console.log('receiveCustomer', event)
    this.getCustomerByCompany()
  }

  onDialogClose(event) {
    console.log(event)
    this.catData = []     // clear new cat data while open stock form
    this.unitData = []  // clear new unit data while open stock form
    this.displayDialog = false;
  }

  onDialogClose1(event) {
    console.log(event)
    this.displayDialog1 = false;
  }

  onDialogClose2(event) {
    console.log(event)
    this.displayDialog2 = false;
  }

  onDialogClose3(event) {
    console.log(event)
    this.displayDialog3 = false;
  }

  onDialogClose4(event) {
    console.log(event)
    this.displayDialog4 = false;
  }

  categoryDialog(event) {
    console.log('categoryDialog', event)
    this.displayDialog1 = event;
  }

  unitDialog(event) {
    console.log('unitDialog', event)
    this.displayDialog2 = event;
  }

  taxDialog(event) {
    console.log('taxDialog', event)
    this.displayDialog4 = event;
  }

  scanBarcode() {
    let bardcode = '5e12c97cfb943b2df8151858';
    var geStockData = _.find(this.stocks, function (o) { return o._id == bardcode; });
    console.log('geStockData', geStockData)
    let event = { value: geStockData._id }
    console.log('event', event)
    let addIndex = Number(this.invoiceForm.get('invoiceList')['controls'].length) - 1
    if (addIndex == 0 && this.invoiceForm.get('invoiceList')['controls'][addIndex].invalid) {
      this.onSelectProduct(event, addIndex)
      this.invoiceForm.get('invoiceList')['controls'][addIndex].controls['stock_details_id'].setValue(geStockData._id)
    } else {
      this.addListItem()
      this.onSelectProduct(event, addIndex)
      this.invoiceForm.get('invoiceList')['controls'][addIndex].controls['stock_details_id'].setValue(geStockData._id)
    }

  }

}
