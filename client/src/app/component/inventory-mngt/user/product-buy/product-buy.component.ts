import { Component, OnInit } from '@angular/core';
import { ProductPayment } from 'src/app/model/product_payment.model';
import { MessageService } from 'primeng/api';
import { StripeCheckoutLoader, StripeCheckoutHandler } from 'ng-stripe-checkout';

import * as moment from 'moment';
import { AuthService } from 'src/app/shared/auth.service';
import { SessionService } from 'src/app/shared/session.service';
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
    public sessionService: SessionService
    ) { }

  ngOnInit() {
    this.getPaymentDetails()
  }

  getPaymentDetails(){
    this.auth.getPaymentDetails()
    .subscribe((data:any)=>{  
      console.log('data',data);  
      this.paymentDetails = data[0]
    },
    error =>{   
      console.log('er',error);
      this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
    })
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
        plan_type : 1,
        payment_amount : 15000,
        currency: 'INR',
        company_details_id: this.sessionService.getItem('company_id'),
        payment_details: token,
        expiry_date: '',
        status: 1
    }
    this.onRegisterPayment(payData)
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


onRegisterPayment(cdata){
  this.messageService.clear();
  this.auth.onRegisterPayment(cdata)
  .subscribe((data:any)=>{  
    console.log('data',data);  
  },
  error =>{   
    console.log('er',error);
    this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
  })
 }

}
