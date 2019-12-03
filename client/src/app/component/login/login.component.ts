import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
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
  constructor(private auth: AuthService, private _fb: FormBuilder,private messageService: MessageService, private router: Router) {
    if(this.auth.isLogedIn()){
      this.router.navigate(["/dashboard"]);
    }
    this.socket = io(environment.api_url);

    this.loginForm = this._fb.group({
      // userName: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
      user_email: ["", Validators.required],
      user_pwd: ["", Validators.required],
      rememberMe: [""]
    });
  }

  ngOnInit() {
 
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
        setTimeout(() => {
          this.socket.emit('loginTodo', data.user);
          localStorage.setItem('secret_token',data.token);
          localStorage.setItem('user_details',JSON.stringify(data.user));
          localStorage.setItem('client_company_id',data.user.company_details_id._id);
          this.messageService.add({severity:'success', summary:'Success!', detail:'Login success!'});
          localStorage.setItem("inventryLogedIn", "1");
          this.router.navigate(["/dashboard"]);
         }, 2000);
        
      }else{
        this.messageService.clear();
        this.messageService.add({severity:'warn', summary:'Warning!', detail:'Check your User Name/Password'});
      }
    
    },
    error =>{
      console.log('er',error);
      this.showSpinner = false;
      this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
      // localStorage.setItem("inventryLogedIn", "1");
      // this.router.navigate(["/dashboard"]);
    })
  }
}
