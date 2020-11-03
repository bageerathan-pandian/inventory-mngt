import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { CustomerService } from 'src/app/shared/customer.service';
import { StockService } from 'src/app/shared/stock.service';
import { DashboardService } from 'src/app/shared/dashboard.service';

import * as _ from 'lodash';
import * as moment from 'moment';
import { CompanyService } from 'src/app/shared/company.service';
import { AuthLoginService } from 'src/app/shared/auth.service';
import { SalesService } from 'src/app/shared/sales.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SessionService } from 'src/app/shared/session.service';
import { PurchaseService } from 'src/app/shared/purchase.service';
import { InvoiceService } from 'src/app/shared/invoice.service';
import { CurrencyPipe } from '@angular/common';
import { CollectionService } from 'src/app/shared/collection.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  data1: any;
  data2: any;
  options: any;
  options1: any;
  public items: MenuItem[];
  customerList: any = [];
  stocksList: any = [];
  companyList: any = [];
  branchList: any = [];
  stocksLatestList: any = [];
  salesLatestList: any = [];
  purchaseLatestList: any = [];
  totalSalesAmount: number = 0;
  totalPurchaceAmount: number = 0;
  totalCollectionAmount: number = 0;
  yearList: any = [];
  selectedYear: number = Number(moment().format('YYYY'));
  company_id: any;
  user_details: any
  loggedInUsersList: any = []
  sendingVerificationMail: boolean
  sendingVerificationMailStatus: Number
  resendVerifyForm: FormGroup

  constructor(private companyService: CompanyService, private _fb: FormBuilder, private auth: AuthLoginService, public sessionService: SessionService, private customerService: CustomerService, private stockService: StockService, private dashboardService: DashboardService, private salesService: SalesService,
    private messageService: MessageService, private collectionService: CollectionService, private purchaseService: PurchaseService, private invoiceService: InvoiceService
  ) {

    this.resendVerifyForm = this._fb.group({
      _id: [this.sessionService.getItem('_id'), Validators.required],
      user_name: [this.sessionService.getItem('user_name'), Validators.required],
      user_email: [this.sessionService.getItem('user_email'), [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    })

    this.company_id = this.sessionService.getItem('_id').company_details_id;


    this.yearList = [
      { label: '2019', value: 2019 },
      { label: '2018', value: 2018 }
    ];
    this.options = {
      title: {
        display: true,
        text: 'Monthly Profit/Loss Report for 2020',
        fontSize: 16
      },
      legend: {
        position: 'bottom',
        // labels: {
        //   display: false
        // }
      },
      responsive: true,
      tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
          label: function (tooltipItem, data) {
            let label = data.labels[tooltipItem.index];
            let datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            let currencyPipe = new CurrencyPipe('en');
            let formattedNumber = currencyPipe.transform(datasetLabel, 'INR', 'symbol');
            return label + ': ' + formattedNumber;
          }
        }
      },
      scales: {
        yAxes: [{          
          // stacked: true,
          ticks: {
            beginAtZero: !0,
            userCallback: function (value, index, values) {
              let currencyPipe = new CurrencyPipe('en');
              let formattedNumber = currencyPipe.transform(value, 'INR', 'symbol');
              return formattedNumber;
            }
          }
        }],
        XAxes: [{
          // stacked: true
      }]
      },
      
    };

    this.items = [
      { label: '', icon: 'pi pi-home' },
      { label: 'Dashboard' }
    ];

  }

  ngOnInit() {

    /**
       * login user by sockte
       */
    this.auth.logInSocktet().subscribe((user: any) => {
      console.log('login user');
      console.log(user);
      console.log(this.loggedInUsersList);
      var sliceIndex = _.findIndex(this.loggedInUsersList, function (o) { return o._id == user._id; });
      console.log(sliceIndex);
      if (sliceIndex > -1) {
        // this.loggedInUsersList.splice(sliceIndex, 1);
        this.loggedInUsersList.splice(sliceIndex, 1, user);
      } else {
        this.loggedInUsersList.push(user);
      }

    })

    this.auth.logOutSocktet().subscribe((user: any) => {
      console.log('logout user');
      console.log(user);
      console.log(this.loggedInUsersList);
      var sliceIndex = _.findIndex(this.loggedInUsersList, function (o) { return o._id == user._id; });
      console.log(sliceIndex);
      if (sliceIndex > -1) {
        // this.loggedInUsersList.splice(sliceIndex, 1);
        this.loggedInUsersList.splice(sliceIndex, 1, user);
      }

    })
    this.getTotalSalesAmount();
    this.getTotalPurchaseAmount();
    this.getTotalCollectionAmount();
    this.getLoggedInUsers();
    this.getCompany();
    this.getCustomerByCompany();
    this.getStocksByCompany();
    this.getLatestStocks();
    this.getLatestSales();
    this.getLatestPurchase();
    this.getProfitLoss();
  }

  getLoggedInUsers() {
    console.log('getUserCompanyId', this.sessionService.getItem('company_id'))
    this.dashboardService.getLoggedInUsers()
      .subscribe((data: any) => {
        console.log('getLoggedInUsers', data);
        this.loggedInUsersList = [];
        if (this.sessionService.getItem('role') != 0) {
          for (let lData of data) {
            if (lData.company_details_id._id == this.sessionService.getItem('company_id')) {
              console.log('lData', lData);
              this.loggedInUsersList.push(lData);
            }
          }
        } else {
          this.loggedInUsersList = data;
        }

        // this.getBranchByCompany(data[0]._id)
      })
  }

  getCompany() {
    this.companyService.getCompany()
      .subscribe((data: any) => {
        console.log('companyList', data);
        this.companyList = data;
        // this.getBranchByCompany(data[0]._id)
      })
  }


  getTotalSalesAmount() {
    this.invoiceService.getTotalSalesAmount()
      .subscribe((data: any) => {
        console.log('getTotalSalesAmount', data);
        this.totalSalesAmount = data.length > 0 ? data[0].grand_total : 0;
      })
  }



  getTotalPurchaseAmount() {
    this.invoiceService.getTotalPurchaseAmount()
      .subscribe((data: any) => {
        console.log('getTotalPurchaseAmount', data);
        this.totalPurchaceAmount = data.length > 0 ? data[0].grand_total : 0;
      })
  }

  getTotalCollectionAmount() {
    this.collectionService.getCustomerCollectionTotal()
      .subscribe((data: any) => {
        console.log('getTotalCollectionAmount', data);
        this.totalCollectionAmount = data.length > 0 ? data[0].grand_total : 0;
      })
  }

  getCustomerByCompany() {

    this.customerService.getCustomerByCompany()
      .subscribe((data: any) => {
        console.log('customerList', data);
        this.customerList = data;
      })
  }


  getStocksByCompany() {
    this.stockService.getStockByCompany()
      .subscribe((data: any) => {
        console.log('stocksList', data);
        this.stocksList = data;
      })
  }


  getLatestStocks() {
    this.dashboardService.getLatestStocks()
      .subscribe((data: any) => {
        console.log('getLatestStocks', data);
        this.stocksLatestList = data;
      })
  }

  getLatestSales() {
    this.dashboardService.getLatestSales()
      .subscribe((data: any) => {
        console.log('getLatestSales', data);
        this.salesLatestList = data;
      })
  }

  getLatestPurchase() {
    this.dashboardService.getLatestPurchase()
      .subscribe((data: any) => {
        console.log('getLatestPurchase', data);
        this.purchaseLatestList = data;
      })
  }

  getProfitLoss() {
    this.dashboardService.getProfitLoss()
      .subscribe((data: any) => {
        console.log('getProfitLoss', data);
        this.data = {
          labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Purchase',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
              label: 'Sales',
              backgroundColor: '#FFB300',
              borderColor: '#7CB342',
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
              label: 'Collections',
              backgroundColor: '#8a6d3b',
              borderColor: '#8a6d3b',
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
              label: 'Profit',
              backgroundColor: '#66BB6A',
              borderColor: '#7CB342',
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
              label: 'Loss',
              backgroundColor: '#ee4e09 ',
              borderColor: '#ee4e09 ',
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
          ]
        }
        data.purchase_pos.forEach(element => {
          this.data.datasets[0].data[element._id.month] = element.totalAmount
        });
        data.sales_pos.forEach(element => {
          this.data.datasets[1].data[element._id.month] = element.totalAmount
        });        
        data.collection_pos.forEach(element => {
          this.data.datasets[2].data[element._id.month] = element.totalAmount
        });

        data.sales_pos.forEach(element => {
          let pos = this.data.datasets[1].data[element._id.month] - this.data.datasets[0].data[element._id.month];
          if (pos >= 0) {
            this.data.datasets[3].data[element._id.month] = pos
          } else {
            this.data.datasets[4].data[element._id.month] = pos

          }
        });
      })
  }


  onChangeCompany(val) {
    console.log('onChangeCompany', val);
    this.company_id = val;
    this.sessionService.setItem('company_id', val._id);
    this.ngOnInit()
  }


  resendVerifyEmail() {
    console.log('resendVerifyEmail')
    this.sendingVerificationMail = true
    // let emailData = {
    //   _id : this.sessionService.getItem('_id')._id,
    //   user_name : this.sessionService.getItem('_id').user_name,
    //   user_email : this.sessionService.getItem('_id').user_email
    // }
    this.auth.resendVerifyEmail(this.resendVerifyForm.value)
      .subscribe((data: any) => {
        console.log('data', data);
        this.sendingVerificationMail = false
        this.sendingVerificationMailStatus = data
        if (data == 1) {
          this.sessionService.setItem('user_email', this.resendVerifyForm.value.user_email) // update localstoreage values
          this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Send Successfully' });
        } else if (data == 2) {
          this.messageService.add({ severity: 'warn', summary: 'Not send', detail: '' });
        } else if (data == 3) {
          this.messageService.add({ severity: 'warn', summary: 'Email alredy exist', detail: '' });
        } else {
          this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: 'Not send. Retry' });
        }
      },
        error => {
          console.log('er', error);
          this.sendingVerificationMail = false
          this.messageService.add({ severity: 'error', summary: 'Oops!', detail: 'Somthing went wrong' });
        })
  }


}
