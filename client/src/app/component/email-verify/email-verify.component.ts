import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';


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

  constructor(private auth: AuthService, private _fb: FormBuilder, private messageService: MessageService, private activeRoute: ActivatedRoute, private router: Router) { 
    
    
    this.socket = io(environment.api_url);
    
    this.verifyForm = this._fb.group({
      _id: [this.activeRoute.snapshot.params.id],
      token: [this.activeRoute.snapshot.params.token,Validators.required],
      isVerified: [true]
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
      console.log('data',data[0]); 
      this.isVerifying = true;  
      if(data.length == 0){
        this.status = 2; 
      } else{
        this.status = 1; 
        this.userCredential = {
          user_email: data[0].user_email,
          user_pwd: data[0].user_pwd
        } 
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
      if(data.user.status == 0){
        this.messageService.add({severity:'error', summary:'Opps!', detail:'Your account is deactivated by Company admin!'});
        return false;
      }
      if(data.user.status == 2){
        this.messageService.add({severity:'error', summary:'Opps!', detail:'Your account has been expired. Contact Ownwaysoft.com!'});
        return false;
      }
      if(data.token){
        // setTimeout(() => {
          // this.spinner.hide();
          this.socket.emit('loginTodo', data.user);
          localStorage.setItem("inventryLogedIn", "1");
          localStorage.setItem('secret_token',data.token);
          localStorage.setItem('user_details',JSON.stringify(data.user));
          localStorage.setItem('client_company_id',data.user.company_details_id._id);
          sessionStorage.setItem('user_email', data.user.user_email);
          sessionStorage.setItem('user_pwd',  data.user.user_pwd);
          sessionStorage.setItem('rememberMe',  data.user.rememberMe);
          sessionStorage.setItem('secret_token', data.token);
          this.router.navigate(["/inventory-mngt/dashboard"]);
          // this.messageService.add({severity:'success', summary:'Success!', detail:'Login success!'});
        //  }, 1000);
        
      }else{
        this.messageService.clear();
        // this.messageService.add({severity:'warn', summary:'Warning!', detail:'Check your User Name/Password'});
        // this.spinner.hide();
      }
    
    },
    error =>{
      console.log('er',error);
      // this.spinner.hide();
      this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
      // localStorage.setItem("inventryLogedIn", "1");
      // this.router.navigate(["/dashboard"]);
    })
  }



}
