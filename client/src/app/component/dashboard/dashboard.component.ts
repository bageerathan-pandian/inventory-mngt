import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { CustomerService } from 'src/app/shared/customer.service';
import { StockService } from 'src/app/shared/stock.service';
import { DashboardService } from 'src/app/shared/dashboard.service';

import * as _ from 'lodash';
import * as moment from 'moment';
import { CompanyService } from 'src/app/shared/company.service';
import { AuthService } from 'src/app/shared/auth.service';
import { SalesService } from 'src/app/shared/sales.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any;
  data1: any;
  data2: any;
  options:any;
  options1:any;
  public items: MenuItem[];
  customerList:any =[];
  stocksList:any = [];
  companyList: any = [];
  branchList: any = [];
  stocksLatestList:any =[];
  salesLatestList:any =[];
  purchaseLatestList:any =[];
  totalSalesAmount:number = 0;
  totalPurchaceAmount:number = 0;
  yearList: any = [];
  selectedYear: number = Number(moment().format('YYYY'));
  client_company_id: any;
  user_details:any
  loggedInUsersList:any =[]
  constructor(private companyService: CompanyService, public auth: AuthService, private customerService:CustomerService,private stockService:StockService,private dashboardService:DashboardService, private salesService:SalesService) {
   
   
    this.client_company_id = this.auth.getUserData().company_details_id;
    this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
              {
                  label: 'Purchase',
                  backgroundColor: '#42A5F5',
                  borderColor: '#1E88E5',
                  data: [65, 59, 80, 81, 56, 55, 40]
              },
              {
                  label: 'Sales',
                  backgroundColor: '#9CCC65',
                  borderColor: '#7CB342',
                  data: [28, 48, 40, 19, 86, 27, 90]
              }
          ]
      }
      this.data1 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: '2018',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: '2019',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    }
    this.data2 = {
      labels: ['Sales','Purchase'],
      datasets: [
          {
              data: [300, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
      this.yearList = [
        {label: '2019', value: 2019},
        {label: '2018', value: 2018}
    ];
    this.options = {
      title: {
          display: true,
          text: 'Profit/Loss Report',
          fontSize: 16
      },
      legend: {
          position: 'bottom'
      }
  };
  this.options1 = {
    title: {
        display: true,
        text: 'Customer Yearly Report',
        fontSize: 16
    },
    legend: {
        position: 'bottom'
    }
};
      this.items = [
        {label:'',icon: 'pi pi-home'},
        {label:'Dashboard'}
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
        }else{
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
    this.getLoggedInUsers();
    this.getCompany();
    this.getCustomerByCompany(this.auth.getUserCompanyId());
    this.getStocksByCompany(this.auth.getUserCompanyId());
    this.getLatestStocks(this.auth.getUserCompanyId());
    this.getLatestSales(this.auth.getUserCompanyId());
    this.getLatestPurchase(this.auth.getUserCompanyId());
  }

  getLoggedInUsers(){
    console.log('getUserCompanyId',this.auth.getUserCompanyId())
    this.dashboardService.getLoggedInUsers()
    .subscribe((data:any)=>{
      console.log('getLoggedInUsers',data);
      this.loggedInUsersList = [];
      if(this.auth.getUserData().role != 0){
        for(let lData of data){
          if(lData.company_details_id._id == this.auth.getUserCompanyId()){
            console.log('lData',lData);
          this.loggedInUsersList.push(lData);
          }
        }
      }else{
        this.loggedInUsersList = data;
      }
      
      // this.getBranchByCompany(data[0]._id)
    })
  }

  getCompany(){
    this.companyService.getCompany()
    .subscribe((data:any)=>{
      console.log('companyList',data);
      this.companyList = data;
      // this.getBranchByCompany(data[0]._id)
    })
  }


  getTotalSalesAmount(){
    this.salesService.getTotalSalesAmount()
    .subscribe((data:any)=>{
      console.log('getTotalSalesAmount',data);
      this.totalSalesAmount = data[0].grand_total;
    })
  }

  getCustomerByCompany(id){

    this.customerService.getCustomerByCompany(id)
    .subscribe((data:any)=>{
      console.log('customerList',data);
      this.customerList = data;
    })
  }

  
  getStocksByCompany(id){
    this.stockService.getStockByCompany(id)
    .subscribe((data:any)=>{
      console.log('stocksList',data);
      this.stocksList = data;
    })
  }

    
  getLatestStocks(id){
    this.dashboardService.getLatestStocks(id)
    .subscribe((data:any)=>{
      console.log('getLatestStocks',data);
      this.stocksLatestList = data;
    })
  }

  getLatestSales(id){
    this.dashboardService.getLatestSales(id)
    .subscribe((data:any)=>{
      console.log('getLatestSales',data);
      this.salesLatestList = data;
    })
  }

  getLatestPurchase(id){
    this.dashboardService.getLatestPurchase(id)
    .subscribe((data:any)=>{
      console.log('getLatestPurchase',data);
      this.purchaseLatestList = data;
    })
  }

 

  onChangeCompany(val){
    console.log('onChangeCompany',val);
    this.client_company_id = val;
    localStorage.setItem('client_company_id',val._id);
    this.ngOnInit()
  }


}
