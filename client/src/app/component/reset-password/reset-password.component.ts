import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthLoginService } from 'src/app/shared/auth.service';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MustMatch } from 'src/app/shared/validations/password-match';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

 
  resetForm: FormGroup;
  _id: string
  token: string

  constructor(private auth: AuthLoginService, private _fb: FormBuilder,private messageService: MessageService, private router: Router,
    private spinner: NgxSpinnerService,
    private activeRoute: ActivatedRoute,
    public sessionService: SessionService
    ) {
    if(this.sessionService.getItem('inventryLogedIn')){
      this.router.navigate(["/dashboard"]);
    }
    this.resetForm = this._fb.group({  
      _id: [this.activeRoute.snapshot.params.id,Validators.required],
      user_pwd: ['',Validators.required],
      cnfirm_user_pwd: ['',Validators.required],
      reset_pwd_token: [this.activeRoute.snapshot.params.token,Validators.required]
    }, {
      validator: MustMatch('user_pwd', 'cnfirm_user_pwd')
    }); 
  }

  ngOnInit() {}

   public checkValidity(): void {
    Object.keys(this.resetForm.controls).forEach((key) => {
      this.resetForm.controls[key].markAsDirty();
    });
  }


  resetPassword() {
    console.log(this.resetForm);
    if (this.resetForm.invalid) {
      this.checkValidity()
      return false;
    }
    this.messageService.clear();
    this.spinner.show()
    this.auth.resetPassword(this.resetForm.value)
    .subscribe((data:any)=>{
      console.log(data);   
      this.spinner.hide()
      this.messageService.clear();  
      if(data == 1){
        this.messageService.add({severity:'success', summary:'Success!', detail:'Password Updated successfully'});
        this.router.navigate(['/login'])
      }else if(data == 2){  
        this.messageService.add({severity:'warn', summary:'Warning!', detail:'User not available or User deactivated'});
      }else if(data == 3){  
        this.messageService.add({severity:'warn', summary:'Warning!', detail:'Password reset token is invalid or has expired.'});
      }else{
        this.messageService.add({severity:'warn', summary:'Warning!', detail:'Please try again!'});
        this.spinner.hide()
      } 
    },
    error =>{   
      console.log('er',error);
      this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
      this.spinner.hide()
    })
  }


}
