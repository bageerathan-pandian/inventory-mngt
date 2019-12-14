import { Component, OnInit } from '@angular/core';
import { Payment } from "src/app/model/payment.model";
import {MenuItem} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { Invoice } from 'src/app/model/invoice.model';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [ConfirmationService]
})
export class PaymentComponent implements OnInit {
 
  public bradCrum: MenuItem[];
  displayDialog: boolean;
  car: any = {};
  cols: any[];
  status:any = [];
  clonedCars: { [s: string]: Payment } = {};
  paymentList:Invoice[];
  constructor(private router:Router,private confirmationService: ConfirmationService,private messageService: MessageService) {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {label:'Master',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard']);
    }},
      {label:'Payment'},
  ];
    this.status = [
      {label:'Paid', value:1},
      {label:'Pending', value:2},
    ]
   
    this.getInvoice();
    
  }

  ngOnInit() {}

  getInvoice(){
    // this.invoiceService.getInvoice()
    // .subscribe((data:any)=>{
    //   console.log('getInvoice',data);
    //     this.paymentList = data;     
    // },
    // error =>{
    //   console.log('getInvoice',error);
    // })
  }



  showDialogToAdd() {
    // this.newCar = true;
    this.car = {};
    this.displayDialog = true;
  }

  save(car) {
    console.log(car);
      this.onRowUpdate(car);
    
  }

  delete(car,index){
    console.log('delete',car,index);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this Payment?',
      accept: () => {
          //Actual logic to perform a confirmation
          this.onRowDelete(car,index);
      }
  });
  }
  
  onRowEdit(car: Invoice) {
    console.log(car);
    this.displayDialog = true;
     this.car = {
       id:car.id,
  //      customer_id: car.customer_id,
  // customer_name:  car.customer_name,
  // sub_amount:  car.sub_amount,
  discount:  car.discount,
  grand_total:  car.grand_total,
  payment_type:  car.payment_type,
  status: car.status,
     }
  }

  onRowDelete(car,index) {
    console.log(car,index);
    this.paymentList.splice(index, 1);
    this.paymentList = [...this.paymentList];
    this.messageService.add({severity:'success', summary:'Payment Deleted Successfully', detail:'Payment Deleted Successfully'});

  }

  onRowUpdate(user) {
    console.log(user);
    this.displayDialog = false;
    var sliceIndex = _.findIndex(this.paymentList, function (o) { return o.id == user.id; });
    console.log(sliceIndex);
    if (sliceIndex > -1) {
      // Replace item at index using native splice
      this.paymentList.splice(sliceIndex, 1, user);
    }
    this.paymentList = [...this.paymentList];
    this.messageService.add({severity:'success', summary:'Payment Updated Successfully', detail:'Payment Updated Successfully'});

  }

  onChangeStatus(event){
    console.log(event);
    let isChecked = event.checked;
  }


}