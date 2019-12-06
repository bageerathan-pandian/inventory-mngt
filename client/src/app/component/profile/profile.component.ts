import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ImageUploadService } from 'src/app/shared/image-upload.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup
  displayDialog: boolean
  
  public bradCrum: MenuItem[];
  roleList:any = []
  
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(public auth: AuthService, private _fb: FormBuilder, private router: Router,private imageUploadService: ImageUploadService, private userService: UserService, private messageService: MessageService) {
    
   
    this.userForm = this._fb.group({
      _id: [this.auth.getUserData()._id],
      user_name: [this.auth.getUserData().user_name,Validators.required],
      user_image: [this.auth.getUserData().user_image,Validators.required],
      user_email: [this.auth.getUserData().user_email,Validators.required],
      user_pwd: [this.auth.getUserData().user_pwd,Validators.required],
      cnfirm_user_pwd: [this.auth.getUserData().cnfirm_user_pwd,Validators.required],
      company_details_id:[this.auth.getUserData().company_details_id._id,Validators.required],
      phone:[this.auth.getUserData().phone,Validators.required],
      role: [this.auth.getUserData().role,Validators.required],
      status: [1,Validators.required]
    })
    
    this.croppedImage = this.auth.getUserData().user_image;
  }

  ngOnInit() {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/dashboard'])}
      },
      {
        label: "Profile",
        command: event => {
          this.router.navigate(["/profile"]);
        }
      }
    ];
  
      this.roleList = [
        {label:'Admin', value:1},
        {label:'Manager', value:2},
        {label:'Sales Person', value:3},
      ]
   
  }

  // showDialogToAdd(user: User) {
  //   console.log('onRowEdit',user);
  //   this.displayDialog = true;
  //   this.userForm.controls['_id'].setValue(user._id);
  //   this.userForm.controls['company_details_id'].setValue(this.auth.getUserData().company_details_id._id);
  //   this.userForm.controls['role'].setValue(user.role);
  //   this.userForm.controls['user_name'].setValue(user.user_name);
  //   this.userForm.controls['user_email'].setValue(user.user_email);
  //   this.userForm.controls['user_pwd'].setValue(user.user_pwd);
  //   this.userForm.controls['cnfirm_user_pwd'].setValue(user.cnfirm_user_pwd);
  //   this.userForm.controls['phone'].setValue(user.phone);
  //   this.userForm.controls['status'].setValue(user.status);
  // }

  
  profileImageUpload(){
    this.imageUploadService.profileImageUpload(this.imageChangedEvent)
    .subscribe((data:any)=>{
      console.log(data)
      this.userForm.controls['user_image'].setValue(data);
      this.userUpdate()
    })
  }

  public checkValidity(): void {
    Object.keys(this.userForm.controls).forEach((key) => {
        this.userForm.controls[key].markAsDirty();
    });
  }

  userUpdate(){
    if(this.userForm.invalid){
      this.checkValidity()
      return false;
    }
    this.userService.updateUser(this.userForm.value)
    .subscribe((data:any)=>{
      console.log('update',data);
      this.displayDialog = false;
      this.messageService.add({severity:'success', summary:'User Updated Successfully', detail:'User Updated Successfully'});
      this.userService.getUser(this.auth.getUserData()._id)
      .subscribe((data:any)=>{
        console.log('data',data[0]);
        localStorage.setItem('user_details',JSON.stringify(data[0]));

      })
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }
  
  onUpdate() {
    console.log('onRowAdd',this.userForm.value);
    if(this.imageChangedEvent){
      this.profileImageUpload();   
    } else{
      this.userUpdate()
    }
  }

  
  
  fileChangeEvent(file: FileList) {
    console.log(file)
    this.imageChangedEvent = file.item(0);
    console.log('imageChangedEvent',this.imageChangedEvent)
     // show image preview
     var render:FileReader = new FileReader();

     render.onloadend = (e) => {
      console.log('reslt',render)
       this.croppedImage = render.result;
     }
     render.readAsDataURL(this.imageChangedEvent);
  
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
imageLoaded() {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}

}
