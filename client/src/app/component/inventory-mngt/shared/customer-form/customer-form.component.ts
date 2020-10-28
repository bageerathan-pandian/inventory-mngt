import { Component, OnInit, Input, Output ,EventEmitter, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';
import { CommonService } from 'src/app/shared/common.service';
import { MessageService } from 'primeng/api';
import { SessionService } from 'src/app/shared/session.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import * as _ from 'lodash';
import { RouteService } from 'src/app/shared/route.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  
  @Input() custData: any;
  @Input() routeData: any;
  @Input() displayDialog3: boolean
  
  @Output() displayChangeEvent3 = new EventEmitter();
  @Output() customerEvent = new EventEmitter();

  // @Output() routeDialogEvent = new EventEmitter();
  displayDialog2: boolean

  customerForm:FormGroup
  status:any
  routeNameList:any;

  constructor(private _fb: FormBuilder, private customerService:CustomerService,private commonService: CommonService,
    public sessionService: SessionService, private messageService: MessageService, private routeService: RouteService
    ) {
 
      this.status = [
        {label:'Active', value:1},
        {label:'De-Active', value:0},
      ]

      this.routeNameList = [
        {label:'Barma Colony', value:'Barma Colony'},
        {label:'Sekkalai Road', value:'Sekkalai Road'},
        {label:'100 Feet Road', value:'100 Feet Road'},
        {label:'Senjai', value:'Senjai'},
        {label:'Sriramnagar', value:'Sriramnagar'},
        {label:'Railway Road', value:'Railway Road'},
      ]

      this.customerForm = this._fb.group({
        _id: [''],
        company_details_id: [this.sessionService.getItem('company_id'),Validators.required],
        customer_code: ['',Validators.required],
        customer_name: ['',Validators.required],
        customer_address: ['',Validators.required],
        phone: ['',Validators.required],
        enable_tax:[true,Validators.required],
        customer_gstin:[''],
        route_details_id:[''],
        total_purchase_amt:[0.00],
        total_paid_amt:[0.00],
        total_pending_amt:[0.00],
        status: [1,Validators.required]
      })
  }

  ngOnInit() {
    this.getRouteByCompany()
  }

  
  @ViewChild("placesRef",{static:false}) placesRef : GooglePlaceDirective;
    
  public handleAddressChange(address: Address) {
    console.log('address',address);
  // Do some stuff
    this.customerForm.controls['customer_address'].setValue(address.formatted_address);
  }
  
  ngOnChanges() {
    console.log('displayDialog3',this.displayDialog3);    
    console.log('isObjectcatData', _.isPlainObject(this.routeData))
    if (_.isPlainObject(this.routeData)) {
      console.log('catData', this.routeData);
      this.getRouteByCompany()
      setTimeout(() => {
        this.customerForm.controls['route_details_id'].setValue(this.routeData.value ? this.routeData.value : null);
      }, 1000);
    }
    console.log('isObjectcatData',_.isPlainObject(this.custData))
    if(_.isPlainObject(this.custData)){      
      console.log('custData',this.custData);   
      this.customerForm.controls['_id'].setValue(this.custData._id);
      this.customerForm.controls['customer_code'].setValue(this.custData.customer_code);
      this.customerForm.controls['customer_name'].setValue(this.custData.customer_name);
      this.customerForm.controls['customer_address'].setValue(this.custData.customer_address);
      this.customerForm.controls['phone'].setValue(this.custData.phone);
      this.customerForm.controls['enable_tax'].setValue(this.custData.enable_tax);
      this.customerForm.controls['route_details_id'].setValue(this.custData.route_details_id ? this.custData.route_details_id._id : null);
      this.customerForm.controls['customer_gstin'].setValue(this.custData.customer_gstin);
      this.customerForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
      this.customerForm.controls['total_purchase_amt'].setValue(this.custData.total_purchase_amt);
      this.customerForm.controls['total_paid_amt'].setValue(this.custData.total_paid_amt);
      this.customerForm.controls['total_pending_amt'].setValue(this.custData.total_pending_amt);
      this.customerForm.controls['status'].setValue(this.custData.status);    
      }else{           
        this.getCustomerByCompany()
      }

  }

  getRouteByCompany() {
    this.routeNameList = []
    this.routeService.getRouteByCompany()
      .subscribe((data: any) => {
        console.log('routeNameList', data);
        this.routeNameList.push({ label: '+ Add New Route', value: 0 });
        for (let catData of data) {
          this.routeNameList.push({
            label: catData.route_name + ' | ' + catData.route_code,
            value: catData._id
          })
        }
        console.log('routeNameList1', this.routeNameList);
        // if(_.some(this.catData, _.isObject)){ 
        //   this.stockForm.controls['category_details_id'].setValue(this.stockData.category_details_id  ? this.stockData.category_details_id._id : null);
        // }
      })
  }

  onSelectRoute(event) {
    console.log(event.value);
    if (event.value == 0) {
      // this.showDialogToAddCat()
      // this.routeDialogEvent.emit(true)
      this.displayDialog2 = true
      this.customerForm.controls['route_details_id'].reset();
      return false
    }
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

    
  updateCust() {
    if(this.customerForm.invalid){
      this.checkValidity()
      return false;
    }
    this.customerService.updateCustomer(this.customerForm.value)
    .subscribe((data:any)=>{
      console.log('update customer',data);
      // let newData = {
      //   label : data.customer_name +' | ' +data.customer_code,
      //   value : data._id
      //  }
     
       this.customerEvent.emit(data)
      this.messageService.add({severity:'success', summary:'Customer Updated Successfully', detail:'Customer Updated Successfully'});
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

  onDialogClose2(event){
    this.getRouteByCompany()
  }

    // Work against memory leak if component is destroyed
    ngOnDestroy() {
      this.displayChangeEvent3.unsubscribe();
    }


}
