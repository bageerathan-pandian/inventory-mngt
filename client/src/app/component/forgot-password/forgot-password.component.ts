import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup;
  successRegister: boolean = false;

  constructor(private auth: AuthService, private _fb: FormBuilder,private messageService: MessageService, private router: Router) {
    if(this.auth.isLogedIn()){
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

  onSendResetPassword() {
    if (this.forgotForm.invalid) {
      this.checkValidity()
      return false;
    }
    console.log(this.forgotForm.value);
    this.auth.sendResetPassword(this.forgotForm.value)
    .subscribe((data:any)=>{
      console.log(data);   
      this.successRegister = true;
      this.messageService.clear();  
      if(data == 1){
        // this.messageService.add({severity:'success', summary:'Success!', detail:'We have send reset link to your mail. Check it.'});
      }else{
        this.messageService.add({severity:'warn', summary:'Warning!', detail:'Please try again!'});
      } 
    },
    error =>{   
      console.log('er',error);
      this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
    })
  }
}