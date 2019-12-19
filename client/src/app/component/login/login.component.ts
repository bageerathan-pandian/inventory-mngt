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
    this.auth.logIn(this.loginForm.value)
  }


}
