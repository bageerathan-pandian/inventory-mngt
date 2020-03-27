import { Component, OnInit } from '@angular/core';
import { ProductPayment } from 'src/app/model/product_payment.model';
import { MessageService } from 'primeng/api';
import { StripeCheckoutLoader, StripeCheckoutHandler } from 'ng-stripe-checkout';

import * as moment from 'moment';
import { AuthService } from 'src/app/shared/auth.service';
import { SessionService } from 'src/app/shared/session.service';
import { CompanyService } from 'src/app/shared/company.service';
import { UserService } from 'src/app/shared/user.service';
import { MenuDataService } from 'src/app/shared/menu-data.service';
declare var paypal:any;

@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.component.html',
  styleUrls: ['./product-buy.component.sass']
})
export class ProductBuyComponent implements OnInit {

  addScript:boolean =false;
  futureMonthEnd = moment().add(1, 'M');
  private stripeCheckoutHandler: StripeCheckoutHandler;
  paymentDetails:any = []
  paypalConfig = {
    env:"sandbox",
    client:{
      sandbox:"AYvoUXz1SzxSJvZbpGkgofTKprB_Iz3gY06RgddW8-dmFXcBPdF8HZVe4aFuVuMF0DWLy-df3AjSWN_6",
      production:"EEVz2dWLaEOmKwOdOEdHGLsHJoJONWZkX_b89zPnLv-QwCI1AD_EJYm3bTBiqqVpalvnKuzDci74pimG"
    },
    commit:true,
    payment:(data,actions) =>{
      return actions.payment.create({
        payment:{
          transactions: [
            {amount:{total:11,currency:'USD'}}
          ]
        }
      })
    },
    onAuthorize:(data,actions) =>{
      return actions.payment.execute().then((payment)=>{
        console.log('payment',payment);
      })
    }
  }
  constructor(private messageService: MessageService,private stripeCheckoutLoader: StripeCheckoutLoader, private auth: AuthService,
    public sessionService: SessionService, private companyService: CompanyService, private userService: UserService, private menuDataService: MenuDataService
    ) { }

  ngOnInit() {
  }



  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    if(!this.addScript){
      this.addPaypalScript().then(()=>{
        paypal.Button.render(this.paypalConfig,'#paypal-checkout-btn')
      })
    }
  }

  public ngAfterViewInit() {
    this.stripeCheckoutLoader.createHandler({
        key: 'pk_test_F63TkaKKCwSbIPGbjcbzWuJT00PfCXqOJj',
        token: (token) => {
            // Do something with the token...
            console.log('Payment successful!', token);
        }
    }).then((handler: StripeCheckoutHandler) => {
        this.stripeCheckoutHandler = handler;
    });
}


  addPaypalScript(){
    this.addScript = true;
    return new Promise((resolve,reject)=>{
      let scriptTagElement = document.createElement('script');
      scriptTagElement.src = "https://www.paypalobjects.com/api/checkout.js";
      scriptTagElement.onload = resolve;
      document.body.appendChild(scriptTagElement);
    })
    
  }

  
public onBuyProduct() {
  this.stripeCheckoutHandler.open({
    amount: 1500000,
    currency: 'INR',
  }).then((token) => {
    // Do something with the token...
    console.log('Payment successful!', token);
    let payData:ProductPayment = {
        _id: this.sessionService.getItem('product_payment_details_id'),
        plan_type : 1,
        payment_amount : 15000,
        currency: 'INR',
        // company_details_id: this.sessionService.getItem('company_id'),
        payment_details: token,
        expiry_date: '',
        status: 1
    }
    this.onUpdatePayment(payData)
  }).catch((err) => {
    // Payment failed or was canceled by user...
    if (err !== 'stripe_closed') {
        throw err;
    }
    
  //   let payData:ProductPayment = {
  //     plan_type : 1,
  //     payment_amount : 15000,
  //     currency: 'INR',
  //     company_details_id: this.auth.getUserData().company_details_id,
  //     payment_details: err,
  //     expiry_date: this.futureMonthEnd,
  //     status: 2
  // }
  // this.onRegisterPayment(payData)
});
}



 onUpdatePayment(pdata){
  this.messageService.clear();
  this.auth.onUpdatePayment(pdata)
  .subscribe((data:any)=>{  
    console.log('data',data); 
    this.sessionService.setItem('plan_type',1);
    this.sessionService.setItem('expiry_date','');
    this.sessionService.setItem('payment_details',pdata.payment_details);
  let updateCompany = {
    _id: this.sessionService.getItem('company_id'),
    status: 1
  }
    this.onRowUpdateCompany(updateCompany)
  },
  error =>{   
    console.log('er',error);
    this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
  })
 }

 
 onRowUpdateCompany(company) {
  console.log(company);
  this.companyService.updateCompany(company)
  .subscribe((data:any)=>{
    console.log('update',data);    
    this.sessionService.setItem('status',1);
    this.messageService.add({severity:'success', summary:'Company Updated Successfully', detail:'Company Updated Successfully'});
    let updateUser = {
      _id: this.sessionService.getItem('_id'),
      status: 1
    }
    this.menuDataService.companyStatusSource.next(1)
    this.onRowUpdateUser(updateUser);
  },
  error =>{
    console.log(error);
    this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

  })

}

onRowUpdateUser(user) {
  console.log(user);
  this.userService.updateUser(user)
  .subscribe((data:any)=>{
    console.log('update',data);    
    console.log('data',data);
    this.messageService.add({severity:'success', summary:'User Updated Successfully', detail:'User Updated Successfully'});

  },
  error =>{
    console.log(error);
    this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

  })

}

}
