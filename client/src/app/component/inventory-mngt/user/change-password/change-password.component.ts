import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthLoginService } from 'src/app/shared/auth.service';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/shared/validations/password-match';
import { oldMatch } from 'src/app/shared/validations/old-password-match';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  providers:[ConfirmationService]
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup
  displayDialog: boolean
  public bradCrum: MenuItem[];
  constructor(private auth: AuthLoginService, private _fb: FormBuilder, private messageService: MessageService,private router: Router, private confirmationService: ConfirmationService,
    public sessionService: SessionService
    ) {
    
   
    this.changePasswordForm = this._fb.group({
      _id: [this.sessionService.getItem('_id')],
      user_pwd: ['',Validators.required],
      new_user_pwd: ['',Validators.required],
      cnfirm_user_pwd: ['',Validators.required],
      company_details_id:[this.sessionService.getItem('company_id'),Validators.required]   
    }, {
      validator: [oldMatch(this.sessionService.getItem('user_pwd'), 'user_pwd'),MustMatch('new_user_pwd', 'cnfirm_user_pwd')]
    }); 
  }

  ngOnInit() {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {
        label: "Change Password",
        command: event => {
          this.router.navigate(["/inventory-mngt/change-password"]);
        }
      }
    ];
  }

  public checkValidity(): void {
    Object.keys(this.changePasswordForm.controls).forEach((key) => {
        this.changePasswordForm.controls[key].markAsDirty();
    });
  }
 
  // checkOldPassword(){
  //   this.messageService.clear();
  //   if(this.changePasswordForm.value.user_pwd && (this.auth.getUserData().user_pwd != this.changePasswordForm.value.user_pwd)){
  //       this.messageService.add({severity:'warn', summary:'Warning!', detail:'Old password is wrong!'});
  //       this.changePasswordForm.controls['user_pwd'].setValue('');
  //      }
  // }

  // passwordMatch() {
  //   this.messageService.clear();
  //   let newPassword = this.changePasswordForm.value.new_user_pwd;
  //   let confirmPassword = this.changePasswordForm.value.cnfirm_user_pwd;
  //   if (confirmPassword != '') {
  //     if (newPassword != confirmPassword) {
  //       console.log('not eq');
  //       console.log(this.changePasswordForm);
  //       this.changePasswordForm.controls['cnfirm_user_pwd'].setErrors({ 'nopasswordmatch': true })
  //       this.changePasswordForm.controls['cnfirm_user_pwd'].markAsDirty();
  //       this.messageService.add({severity:'warn', summary:'Warning!', detail:'Password not same'});
  //     } else {
  //       console.log('eq');        
  //       this.changePasswordForm.controls['cnfirm_user_pwd'].setErrors({ 'nopasswordmatch': null })
  //       this.changePasswordForm.controls['cnfirm_user_pwd'].updateValueAndValidity();
  //     }
  //   } else {
  //   }

  // }

  confirm() {
    this.confirmationService.confirm({
        message: 'You will be logged out shortly for security perposes. Please remember your new password before logged out.',
        accept: () => {
            //Actual logic to perform a confirmation
            this.doUpdatePassword()
        }
    });
}

  updatePassword(){
    console.log(this.changePasswordForm)
    if(this.changePasswordForm.invalid){
      this.checkValidity();
      // this.passwordMatch();
      return false;
    }
    // this.submitAttempt = false;
    this.confirm();
  }

  doUpdatePassword(){
    this.auth.changePassword(this.changePasswordForm.value)
    .subscribe((data:any)=>{
      this.messageService.add({severity:'success', summary:'Success!', detail:'Password changed successfully!'});
      this.auth.logOut()
    },
    error => {
      console.log('er',error);
      this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
    })
  }


}
