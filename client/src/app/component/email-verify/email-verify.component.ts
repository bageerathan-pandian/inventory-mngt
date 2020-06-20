import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthLoginService } from 'src/app/shared/auth.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SessionService } from 'src/app/shared/session.service';
import { NgxSpinnerService } from 'ngx-spinner';


declare var io: any

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.scss']
})
export class EmailVerifyComponent implements OnInit {

  isVerifying:boolean = false;
  status: number
  verifyForm: FormGroup
  userCredential:any
  
  private socket;

  constructor(private auth: AuthLoginService, public sessionService: SessionService, private _fb: FormBuilder, private messageService: MessageService, private activeRoute: ActivatedRoute, private router: Router,
    private spinner: NgxSpinnerService
    ) { 
    
    
    this.socket = io(environment.api_url);
    
    this.verifyForm = this._fb.group({
      _id: [this.activeRoute.snapshot.params.id],
      token: [this.activeRoute.snapshot.params.token,Validators.required]
    })
  }

  ngOnInit() {
    this.verifyEmail()
  }

  verifyEmail(){   
    if(this.verifyForm.invalid){
      this.isVerifying = true; 
      this.status = 2;
    }   
    this.auth.verifiedEmail(this.verifyForm.value)
    .subscribe((data:any)=>{  
      console.log('data',data); 
      this.isVerifying = true;  
      if(data.status == 1){
        this.status = 1; 
        this.userCredential = {
          user_email: data.user_email,
          user_pwd: data.user_pwd
        }
      }if(data.status == 2){
        this.status = 2; 
      }if(data.status == 3){
        this.status = 2; 
      } else{ 
      }
     
    },
    error =>{   
      console.log('er',error);
      this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
      this.isVerifying = true; 
      this.status = 2;
    })
  }

  onLogin() {
    console.log(this.userCredential);
    // this.spinner.show();
    this.auth.logIn(this.userCredential)
    .subscribe((data:any)=>{
      console.log('data',data);
      this.messageService.clear();
      this.spinner.hide();
      if(data.token){
        // setTimeout(() => {
          this.socket.emit('loginTodo', data.user);

          this.sessionService.setItem("inventryLogedIn", "1");
          this.sessionService.setItem('secret_token',data.token);
          this.sessionService.setItem('rememberMe',  false);
          this.sessionService.setUserCredentials(data.user)
          // if(this.loginForm.value.rememberMe == true){
          //   this.sessionService.setItem('user_email', this.loginForm.value.user_email);
          //   this.sessionService.setItem('user_pwd',  this.loginForm.value.user_pwd);
          //   this.sessionService.setItem('rememberMe',  this.loginForm.value.rememberMe);
          //   this.sessionService.setItem('secret_token', data.token);
          // }else{
          //   this.sessionService.clear()
          // }
          this.router.navigate(["/inventory-mngt/dashboard"]);
          this.messageService.add({severity:'success', summary:'Success!', detail:'Login success!'});
        //  }, 1000);
        
      }else{
        this.messageService.clear();
        this.messageService.add({severity:'warn', summary:'Warning!', detail:'Check your User Name/Password'});
      }
    
    },
    error =>{
      console.log('er',error);
      this.spinner.hide();
      this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
      // this.sessionService.setItem("inventryLogedIn", "1");
      // this.router.navigate(["/dashboard"]);
    })
}



}
