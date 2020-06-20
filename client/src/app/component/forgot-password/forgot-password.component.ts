import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthLoginService } from 'src/app/shared/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup;
  successRegister: boolean = false;

  constructor(private auth: AuthLoginService, private _fb: FormBuilder,private messageService: MessageService, private router: Router,
    private spinner: NgxSpinnerService,
    public sessionService: SessionService
    ) {
    if(this.sessionService.getItem('inventryLogedIn')){
      this.router.navigate(["/dashboard"]);
    }
    this.forgotForm = this._fb.group({
      // userName: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
      email:  ['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    });
  }

  ngOnInit() {}

   public checkValidity(): void {
    Object.keys(this.forgotForm.controls).forEach((key) => {
      this.forgotForm.controls[key].markAsDirty();
    });
  }

  
 forgotPassword() {
    console.log(this.forgotForm.value);
    if(this.forgotForm.invalid){
      this.checkValidity()
      return false
    }
    this.spinner.show()
    this.auth.forgotPassword(this.forgotForm.value)
    .subscribe((data:any)=>{
      console.log(data);   
      this.spinner.hide()
      this.messageService.clear();  
      if(data == 2){ 
        this.messageService.add({severity:'warn', summary:this.forgotForm.value.email, detail:' No user found with that email address.!'});
        this.forgotForm.controls['email'].setErrors({ 'emailExist': true })
        this.forgotForm.controls['email'].markAsDirty();     
        // this. resetPassword()
      }else if(data == 1){
        this.successRegister = true;
        this.forgotForm.controls['email'].setErrors({ 'emailExist': null })
        this.forgotForm.controls['email'].updateValueAndValidity();
      }else{
        this.messageService.add({severity:'warn', summary:'Warning!', detail:'Please try again!'});
        this.successRegister = false;
        this.spinner.hide()
      } 
    },
    error =>{   
      console.log('er',error);
      this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
      this.successRegister = false;
      this.spinner.hide()
    })
  }
}