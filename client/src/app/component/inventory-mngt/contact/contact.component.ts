import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Contact } from 'src/app/model/contact.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { ContactService } from 'src/app/shared/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  loding: boolean = true;
  public bradCrum: MenuItem[];
  contactList: Contact[];
  contactForm: FormGroup
  displayDialog: boolean; 
  cols: any[];
  columns: any[];
  constructor(private router:Router,private _fb: FormBuilder, private auth:AuthService, private messageService: MessageService, private contactService: ContactService) {
  }

  ngOnInit() {
    
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {
        label: "Contact"
      }
    ];
   
    
    this.contactForm = this._fb.group({
      _id: [''],
      name: ['',Validators.required],
      email: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      subject: ['',Validators.required],
      comments: ['',Validators.required]
    })
   
    this.cols = [
      // { field: '_id', header: '#' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'subject', header: 'Subject' },
      { field: 'comments', header: 'Comments' },
      { field: 'updatedAt', header: 'Updated Date' }
  ];

  this.getContact()

  }

  getContact(){
    this.contactService.getContact()
    .subscribe((data:any)=>{
      console.log('contactList',data);
      this.contactList = data;
      this.loding = false;
    })
  }

  
 
  showDialogToAdd() {
    this.contactForm.reset();
    this.displayDialog = true;
  }

  public checkValidity(): void {
    Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.controls[key].markAsDirty();
    });
  }

  sendMail() {
    if(this.contactForm.invalid){
      this.checkValidity()
      return false;
    }      
      this.onRowAdd(this.contactForm.value);
  }


  onRowAdd(contact:Contact) {
    console.log('onRowAdd',contact);
           // this.cars.push(newcar); 
        this.contactService.sendMail(contact)
        .subscribe((data:any)=>{
          console.log('add cat',data);
          this.contactList = [data,...this.contactList];
        
          console.log('this.contactList',this.contactList);
          this.messageService.add({severity:'success', summary:'Mail send Successfully', detail:'Mail send Successfully'});
          this.displayDialog = false;
        },
        error =>{
          console.log(error);
          this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
    
        })
  }
  

  
}
