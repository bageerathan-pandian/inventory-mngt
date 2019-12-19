import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import { SessionService } from 'src/app/shared/session.service';

declare var io: any

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showSpinner: boolean;
  
  private socket;
  constructor(private auth: AuthService, private _fb: FormBuilder,private messageService: MessageService, private router: Router,private spinner: NgxSpinnerService,
    public sessionService: SessionService
    ) {
    if(this.sessionService.getItem('inventryLogedIn')){
      this.router.navigate(["/inventory-mngt/dashboard"]);
    }
    this.socket = io(environment.api_url);

    this.loginForm = this._fb.group({
      // userName: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
      user_email: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      user_pwd: ["", Validators.required],
      rememberMe: [false]
    });
  }

  ngOnInit() {
    if(sessionStorage.getItem('rememberMe') == 'true'){
      this.loginForm.controls['user_email'].setValue(sessionStorage.getItem('user_email'))
      this.loginForm.controls['user_pwd'].setValue(sessionStorage.getItem('user_pwd'))
      this.loginForm.controls['rememberMe'].setValue(sessionStorage.getItem('rememberMe') == 'true' ? true : false)
    }else{
      sessionStorage.clear()
    }
  }

  public checkValidity(): void {
    Object.keys(this.loginForm.controls).forEach((key) => {
        this.loginForm.controls[key].markAsDirty();
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.checkValidity();
      return false;
    }
    console.log(this.loginForm.value);
    this.showSpinner = true;
    this.spinner.show();
    this.auth.logIn(this.loginForm.value)
    .subscribe((data:any)=>{
      console.log('data',data);
      this.showSpinner = false;
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
          this.spinner.hide();
          this.socket.emit('loginTodo', data.user);

          this.sessionService.setItem("inventryLogedIn", "1");
          this.sessionService.setItem('secret_token',data.token);
          this.sessionService.setItem('rememberMe',  this.loginForm.value.rememberMe);
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
        this.spinner.hide();
      }
    
    },
    error =>{
      console.log('er',error);
      this.showSpinner = false;
      this.spinner.hide();
      this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
      // this.sessionService.setItem("inventryLogedIn", "1");
      // this.router.navigate(["/dashboard"]);
    })
  }
}
