import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import { CustomerService } from 'src/app/shared/customer.service';
import { StockService } from 'src/app/shared/stock.service';
import { DashboardService } from 'src/app/shared/dashboard.service';

import * as _ from 'lodash';
import * as moment from 'moment';
import { CompanyService } from 'src/app/shared/company.service';
import { AuthService } from 'src/app/shared/auth.service';
import { SalesService } from 'src/app/shared/sales.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SessionService } from 'src/app/shared/session.service';

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
  company_id: any;
  user_details:any
  loggedInUsersList:any =[]
  sendingVerificationMail:boolean
  sendingVerificationMailStatus:Number
  resendVerifyForm: FormGroup

  constructor(private companyService: CompanyService,private _fb: FormBuilder, private auth: AuthService, public sessionService: SessionService, private customerService:CustomerService,private stockService:StockService,private dashboardService:DashboardService, private salesService:SalesService,
    private messageService: MessageService
    ) {

      this.resendVerifyForm = this._fb.group({
        _id:  [this.sessionService.getItem('_id'),Validators.required],
        user_name:  [this.sessionService.getItem('user_name'),Validators.required],
        user_email:  [this.sessionService.getItem('user_email'),[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      })
   
    this.company_id = this.sessionService.getItem('_id').company_details_id;
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
    this.getCustomerByCompany(this.sessionService.getItem('company_id'));
    this.getStocksByCompany(this.sessionService.getItem('company_id'));
    this.getLatestStocks(this.sessionService.getItem('company_id'));
    this.getLatestSales(this.sessionService.getItem('company_id'));
    this.getLatestPurchase(this.sessionService.getItem('company_id'));
  }

  getLoggedInUsers(){
    console.log('getUserCompanyId',this.sessionService.getItem('company_id'))
    this.dashboardService.getLoggedInUsers()
    .subscribe((data:any)=>{
      console.log('getLoggedInUsers',data);
      this.loggedInUsersList = [];
      if(this.sessionService.getItem('_id').role != 0){
        for(let lData of data){
          if(lData.company_details_id._id == this.sessionService.getItem('company_id')){
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
    this.company_id = val;
    this.sessionService.setItem('company_id',val._id);
    this.ngOnInit()
  }

  
  resendVerifyEmail(){  
    console.log('resendVerifyEmail')  
    this.sendingVerificationMail = true
    // let emailData = {
    //   _id : this.sessionService.getItem('_id')._id,
    //   user_name : this.sessionService.getItem('_id').user_name,
    //   user_email : this.sessionService.getItem('_id').user_email
    // }
    this.auth.resendVerifyEmail(this.resendVerifyForm.value)
    .subscribe((data:any)=>{  
      console.log('data',data); 
      this.sendingVerificationMail = false
      this.sendingVerificationMailStatus = data
      if(data == 1){
        this.sessionService.setItem('user_email',this.resendVerifyForm.value.user_email) // update localstoreage values
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Send Successfully'});
      }else if(data == 2){
         this.messageService.add({severity:'warn', summary:'Not send', detail:''});
        }else if(data == 3){
           this.messageService.add({severity:'warn', summary:'Email alredy exist', detail:''});
      }else{
        this.messageService.add({severity:'warn', summary:'Service Message', detail:'Not send. Retry'});
      }
    },
    error =>{   
      console.log('er',error);
      this.sendingVerificationMail = false
      this.messageService.add({severity:'error', summary:'Oops!', detail:'Somthing went wrong'});
    })
  }


}
