import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthLoginService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  options: any;

  overlays: any[];
  contactForm: FormGroup

  constructor(
    private authService:AuthLoginService,
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
    this.options = {
      center: {lat: 10.073132, lng: 78.780151},
      zoom: 12
  };

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
