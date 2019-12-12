import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";

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
  constructor(private auth: AuthService, private _fb: FormBuilder,private messageService: MessageService, private router: Router,private spinner: NgxSpinnerService) {
    if(this.auth.isLogedIn()){
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
        this.messageService.add({severity:'error', summary:'Opps!', detail:'Your account has been expired. Contact App!'});
        return false;
      }
      if(data.token){
        // setTimeout(() => {
          this.spinner.hide();
          this.socket.emit('loginTodo', data.user);
          localStorage.setItem('secret_token',data.token);
          localStorage.setItem('user_details',JSON.stringify(data.user));
          localStorage.setItem('client_company_id',data.user.company_details_id._id);
          this.messageService.add({severity:'success', summary:'Success!', detail:'Login success!'});
          localStorage.setItem("inventryLogedIn", "1");
          if(this.loginForm.value.rememberMe == true){
            sessionStorage.setItem('user_email', this.loginForm.value.user_email);
            sessionStorage.setItem('user_pwd',  this.loginForm.value.user_pwd);
            sessionStorage.setItem('rememberMe',  this.loginForm.value.rememberMe);
            sessionStorage.setItem('secret_token', data.token);
          }else{
            sessionStorage.clear()
          }
          this.router.navigate(["/inventory-mngt/dashboard"]);
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
      // localStorage.setItem("inventryLogedIn", "1");
      // this.router.navigate(["/dashboard"]);
    })
  }
}
