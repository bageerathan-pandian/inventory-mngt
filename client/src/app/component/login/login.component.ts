import { Component, OnInit } from "@angular/core";
import { AuthLoginService } from "src/app/shared/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import { SessionService } from 'src/app/shared/session.service';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider } from 'angular-6-social-login';
declare var io: any

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showSpinner: boolean;
  display: boolean = false;
  errorMsg: string

  private socket;
  constructor(private auth: AuthLoginService, private _fb: FormBuilder, private messageService: MessageService, private router: Router, private spinner: NgxSpinnerService,
    public sessionService: SessionService, private socialAuthService: AuthService
  ) {
    if (this.sessionService.getItem('inventryLogedIn')) {
      this.router.navigate(["/inventory-mngt/dashboard"]);
    }
    // this.socket = io(environment.api_url);

    this.loginForm = this._fb.group({
      // userName: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
      user_email: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      user_pwd: ["", Validators.required],
      rememberMe: [false]
    });
  }

  ngOnInit() {
    if (localStorage.getItem('rememberMe') == 'true') {
      this.loginForm.controls['user_email'].setValue(localStorage.getItem('user_email'))
      this.loginForm.controls['user_pwd'].setValue(localStorage.getItem('user_pwd'))
      this.loginForm.controls['rememberMe'].setValue(localStorage.getItem('rememberMe') == 'true' ? true : false)
    } else {
      // sessionStorage.clear()
      localStorage.clear()
    }
  }

  public checkValidity(): void {
    Object.keys(this.loginForm.controls).forEach((key) => {
      this.loginForm.controls[key].markAsDirty();
    });
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        this.router.navigate(["/register"],{queryParams:userData});
      }
    );
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.checkValidity();
      return false;
    }
    console.log(this.loginForm.value);
    this.messageService.clear();
    this.showSpinner = true
    this.auth.logIn(this.loginForm.value)
      .subscribe((data: any) => {
        console.log('data', data);
        this.messageService.clear();
        this.spinner.hide();
        this.showSpinner = false
        if (data.user.status == 0) {
          this.display = true
          this.errorMsg = 'Your account is deactivated by Company admin';
          // this.messageService.add({severity:'error', summary:'Opps!', detail:'Your account is deactivated by Company admin!'});
          return false;
        }
        // if(data.user.status == 2){
        // this.display = true
        // this.errorMsg = 'Your account has been expired. Contact Ownwaysoft.com';
        // this.messageService.add({severity:'error', summary:'Opps!', detail:'Your account has been expired. Contact Ownwaysoft.com!'});
        //   return false;
        // }
        if (data.token) {
          // setTimeout(() => {
          this.display = false
          // this.socket.emit('loginTodo', data.user);

          this.sessionService.setItem("inventryLogedIn", "1");
          this.sessionService.setItem('secret_token', data.token);
          this.sessionService.setUserCredentials(data.user)
          if (this.loginForm.value.rememberMe) {
            localStorage.setItem('user_email', data.user.user_email);
            localStorage.setItem('user_pwd', data.user.user_pwd);
            localStorage.setItem('rememberMe', this.loginForm.value.rememberMe);
          } else {
            localStorage.clear()
          }

          if (data.user.status == 2) {
            this.router.navigate(["/inventory-mngt/product-buy"]);
          } else {
            this.router.navigate(["/inventory-mngt/dashboard"]);
          }
          this.messageService.add({ severity: 'success', summary: 'Success!', detail: 'Login success!' });
          //  }, 1000);

        } else {
          this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Check your User Name/Password' });
        }

      },
        error => {
          console.log('er', error);
          this.spinner.hide();
          this.showSpinner = false
          this.messageService.add({ severity: 'error', summary: 'Opps!', detail: 'Sothing went wrong!' });
          // this.sessionService.setItem("inventryLogedIn", "1");
          // this.router.navigate(["/dashboard"]);
        })
  }

  showDialog() {
    this.display = true;
  }


}
