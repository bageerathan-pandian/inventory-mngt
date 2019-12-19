import { Component, OnInit } from "@angular/core";
import { User } from "src/app/model/user.model";
import {MenuItem} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { UserService } from 'src/app/shared/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/shared/company.service';
import { AuthService } from 'src/app/shared/auth.service';
import { CommonService } from 'src/app/shared/common.service';
import { ImageUploadService } from 'src/app/shared/image-upload.service';
import { environment } from 'src/environments/environment';
import * as io from 'socket.io-client';
import { SessionService } from 'src/app/shared/session.service';


@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss'],
  providers: [ConfirmationService]
})
export class UserMasterComponent implements OnInit {
  loding: boolean = true;
  actionLoding: boolean = true;
  userForm: FormGroup;
  public bradCrum: MenuItem[];
  displayDialog: boolean;
  status:any = [];
  cols:any[];
  userList: User[];
  companyList:any =[];
  roleList:any = [];
  emailCheckStatus : any  
  imageChangedEvent: any = '';
  croppedImage: any = '';
  private socket;
  constructor(private router:Router,private auth:AuthService, private companyService: CompanyService, private _fb: FormBuilder, private confirmationService: ConfirmationService,private messageService: MessageService,private userService:UserService,private commonService: CommonService,private imageUploadService: ImageUploadService,
    public sessionService: SessionService
    ) {

    this.socket = io(environment.api_url);
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {label:'Master',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard']);
    }},
      {label:'Users'},
  ];

  if(this.sessionService.getItem('role') == '0'){
    this.roleList = [
      {label:'Admin', value:1},
      {label:'Manager', value:2},
      {label:'Sales Person', value:3},
    ]
  }else if(this.sessionService.getItem('role') == '1'){
    this.roleList = [
      {label:'Manager', value:2},
      {label:'Sales Person', value:3},
    ]
  }else if(this.sessionService.getItem('role') == '2'){
    this.roleList = [
      {label:'Sales Person', value:3},
    ]
  }
   

    this.status = [
      {label:'Active', value:1},
      {label:'De-Active', value:0},
    ]
   
    this.userForm = this._fb.group({
      _id: [''],
      user_code: ['',Validators.required],
      user_name: ['',Validators.required],
      user_image: [''],
      user_email: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      user_pwd: ['',Validators.required],
      cnfirm_user_pwd: ['',Validators.required],
      company_details_id:['',Validators.required],
      phone:['',Validators.required],
      role: ['',Validators.required],
      status: [1,Validators.required]
    })

    this.cols = [
      // { field: '_id', header: '#' },
      { field: 'user_code', header: 'Code' },
      { field: 'user_name', header: 'User Name' },
      { field: 'user_email', header: 'Email' },
      { field: 'user_pwd', header: 'Password' },
      { field: 'phone', header: 'Phone' },
      { field: 'role', header: 'Role' },
      { field: 'updatedAt', header: 'Updated Date' },
      { field: 'status', header: 'Status' }
      // { field: '', header: 'Action' }
  ];
  
   
  }

  ngOnInit() {
    // if(this.user_details.role == '0'){
    //   this.getUser();
    // }else{
      this.getUserByCompany(this.sessionService.getItem('company_id'));
    // }
    this.getCompany();
  }

  getCompany(){
    this.companyService.getCompany()
    .subscribe((data:any)=>{
      console.log('companyList',data);
      this.companyList = data;
    })
  }


  getUser(){
    this.userService.getUsers()
    .subscribe((data:any)=>{
      console.log('userList',data);
      this.userList = data;
      this.loding = false;
    })
  }

  getUserByCompany(id){
    this.userService.getUsersByCompany(id)
    .subscribe((data:any)=>{
      console.log('userList',data);
      this.userList = data;
      this.loding = false;
    })
  }

  showDialogToAdd() {
    console.log(this.userForm);
    this.userForm.reset();
    this.userForm.controls['user_code'].setValue(this.commonService.incrCode('u',this.userList.length));
    this.userForm.controls['status'].setValue(1);
    this.userForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
    this.displayDialog = true;
  }

  public checkValidity(): void {
    Object.keys(this.userForm.controls).forEach((key) => {
        this.userForm.controls[key].markAsDirty();
    });
  }

  save() {
    console.log(this.userForm);
    if(this.userForm.invalid){
      this.checkValidity()
      return;
    }
    console.log(this.userForm.value);
    if(this.userForm.value._id){
      if(this.imageChangedEvent){
        this.profileImageUpload();   
      } else{
        this.onRowUpdate(this.userForm.value);
      }
    }else{      
      if(this.imageChangedEvent){
        this.profileImageUpload();   
      } else{
        this.onRowAdd(this.userForm.value);
      }
    }
  }

  delete(data,index){
    console.log('delete',data,index);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this user?',
      accept: () => {
          //Actual logic to perform a confirmation
          this.onRowDelete(data,index);
      }
  });
  }

  onRowAdd(user) {
    console.log('onRowAdd',user);
    // this.cars.push(newcar); 
    this.userService.addUser(user)
    .subscribe((data:any)=>{
      console.log('add user',data);
      this.userList = [data,...this.userList];
      this.socket.emit('addTodo', data);

      console.log('this.userList',this.userList);
      this.messageService.add({severity:'success', summary:'User Added Successfully', detail:'User Added Successfully'});
      this.displayDialog = false;
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
 
   
  }
  
  onRowEdit(user: User) {
    console.log('onRowEdit',user);
    this.displayDialog = true;
    this.userForm.controls['_id'].setValue(user._id);
    this.userForm.controls['company_details_id'].setValue(user.company_details_id._id);
    this.userForm.controls['role'].setValue(user.role);
    this.userForm.controls['user_code'].setValue(user.user_code);
    this.userForm.controls['user_name'].setValue(user.user_name);
    this.userForm.controls['user_image'].setValue(user.user_image);
    this.userForm.controls['user_email'].setValue(user.user_email);
    this.userForm.controls['user_pwd'].setValue(user.user_pwd);
    this.userForm.controls['cnfirm_user_pwd'].setValue(user.cnfirm_user_pwd);
    this.userForm.controls['phone'].setValue(user.phone);
    this.userForm.controls['status'].setValue(user.status);
    this.emailCheckStatus = user.user_email ? 1 : null;
    this.croppedImage = user.user_image ? user.user_image : '' ;
  }

  onRowDelete(user,index) {
    console.log(user,index);
    this.userService.deleteUser(user._id)
    .subscribe((data:any)=>{
      console.log('delete',data);
      this.userList.splice(index, 1);
      this.userList = [...this.userList];
      this.messageService.add({severity:'success', summary:'User Deleted Successfully', detail:'User Deleted Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
   
  }

  onRowUpdate(user) {
    console.log('onRowUpdate',user);
    this.displayDialog = false;
    // this.userForm.controls.updateValueAndValidity();
    this.userService.updateUser(user)
    .subscribe((data:any)=>{
      console.log('update',data);
      this.socket.emit('updateTodo', data);
      var sliceIndex = _.findIndex(this.userList, function (o) { return o._id == user._id; });
      console.log(sliceIndex);
      if (sliceIndex > -1) {
        // Replace item at index using native splice
        this.userList.splice(sliceIndex, 1, data);
      }
      this.userList = [...this.userList];
      this.messageService.add({severity:'success', summary:'User Updated Successfully', detail:'User Updated Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
    
   
  }

  onChangeStatus(event){
    console.log(event);
    let isChecked = event.checked;

  }

  profileImageUpload(){
    this.imageUploadService.profileImageUpload(this.imageChangedEvent)
    .subscribe((data:any)=>{
      console.log(data)
      this.userForm.controls['user_image'].setValue(data);
      if(this.userForm.value._id){
        this.onRowUpdate(this.userForm.value)
      }else{
        this.onRowAdd(this.userForm.value)
      }
    })
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


  onCheckEmailExist(){
    console.log('valid',this.userForm.controls['user_email'].invalid);
    if(this.userForm.value.user_email != '' && this.userForm.controls['user_email'].invalid){      
      this.emailCheckStatus = null;
      return false
    }
    this.emailCheckStatus = null;
    console.log('onCheckEmailExist',this.userForm.value.user_email);  
    let _id = this.userForm.value._id
    var sliceIndex = _.findIndex(this.userList, function (o) { return o._id == _id; });
    console.log(sliceIndex);
    if (sliceIndex > -1) {
      if(this.userList[sliceIndex].user_email == this.userForm.value.user_email){ // when not change
        this.emailCheckStatus = 1;
        return false;
      }
    }
    this.emailCheckStatus = 0;
    this.userService.onCheckEmailExist(this.userForm.value.user_email)
    .subscribe((data:any)=>{  
      console.log('data',data);   
      if(data.length != 0){
        this.emailCheckStatus = 2;
        this.messageService.add({severity:'warn', summary:'Warning!', detail:'Email already exist!'});
        this.userForm.controls['user_email'].setErrors({ 'emailExist': true })
        this.userForm.controls['user_email'].markAsDirty();
      }else{
        this.messageService.clear();
        this.emailCheckStatus = 1;
        this.userForm.controls['user_email'].setErrors({ 'emailExist': null })
        this.userForm.controls['user_email'].updateValueAndValidity();
      } 
    },
    error =>{   
      console.log('er',error);
      this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
    })
   }
  


}
