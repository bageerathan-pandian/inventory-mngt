import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup
  options: any;

  overlays: any[];

  constructor(
    private authService:AuthService,
    private messageService: MessageService,
    private _fb: FormBuilder
    ) { 
    this.contactForm = this._fb.group({
      name: ['',Validators.required],
      email: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      subject: ['New User Contacted',Validators.required],
      comments: ['',Validators.required],
    })
  }

  ngOnInit() {
  }

  
sendContact() {
  if(this.contactForm.invalid){
    return
  }
  console.log('data',this.contactForm.value);
  // this.cars.push(newcar); 
  this.authService.sendContact(this.contactForm.value)
  .subscribe((data:any)=>{
    console.log('sendContact',data);
    this.messageService.add({severity:'success', summary:'Send Successfully', detail:'We will contact ASAP.'});
  },
  error =>{
    console.log(error);
    this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

  })
}

}
