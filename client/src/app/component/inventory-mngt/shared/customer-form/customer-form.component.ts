import { Component, OnInit, Input, Output ,EventEmitter, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';
import { CommonService } from 'src/app/shared/common.service';
import { MessageService } from 'primeng/api';
import { SessionService } from 'src/app/shared/session.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  
  @Input() displayDialog3: boolean
  
  @Output() displayChangeEvent3 = new EventEmitter();
  @Output() customerEvent = new EventEmitter();

  customerForm:FormGroup
  status:any

  constructor(private _fb: FormBuilder, private customerService:CustomerService,private commonService: CommonService,
    public sessionService: SessionService, private messageService: MessageService
    ) {
 
      this.status = [
        {label:'Active', value:1},
        {label:'De-Active', value:0},
      ]

      this.customerForm = this._fb.group({
        _id: [''],
        company_details_id: [this.sessionService.getItem('company_id'),Validators.required],
        customer_code: ['',Validators.required],
        customer_name: ['',Validators.required],
        customer_address: ['',Validators.required],
        phone: ['',Validators.required],
        status: [1,Validators.required]
      })
  }

  ngOnInit() {
  }

  
  @ViewChild("placesRef",{static:false}) placesRef : GooglePlaceDirective;
    
  public handleAddressChange(address: Address) {
    console.log('address',address);
  // Do some stuff
    this.customerForm.controls['customer_address'].setValue(address.formatted_address);
  }
  
  ngOnChanges() {
    console.log('displayDialog3',this.displayDialog3);
    this.getCustomerByCompany()

  }

  getCustomerByCompany(){
    this.customerService.getCustomerByCompany()
    .subscribe((data:any)=>{
      console.log('unitList',data);  
        this.customerForm.reset();
        this.customerForm.controls['customer_code'].setValue(this.commonService.incrCode('c',data.length));
        this.customerForm.controls['status'].setValue(1);
        this.customerForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))       
    })
  }

  public checkValidity(): void {
    Object.keys(this.customerForm.controls).forEach((key) => {
        this.customerForm.controls[key].markAsDirty();
    });
  }

  
  saveCust() {
    if(this.customerForm.invalid){
      this.checkValidity()
      return false;
    }
    this.customerService.addCustomer(this.customerForm.value)
    .subscribe((data:any)=>{
      console.log('add customer',data);
      // let newData = {
      //   label : data.customer_name +' | ' +data.customer_code,
      //   value : data._id
      //  }
     
       this.customerEvent.emit(data)
      this.messageService.add({severity:'success', summary:'Customer Added Successfully', detail:'Customer Added Successfully'});
      this.displayDialog3 = false;
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
      this.displayDialog3 = false;

    })
  }
  
  onClose(){
    // this.displayDialog = false;
    this.displayChangeEvent3.emit(false)
  }

    // Work against memory leak if component is destroyed
    ngOnDestroy() {
      this.displayChangeEvent3.unsubscribe();
    }


}
