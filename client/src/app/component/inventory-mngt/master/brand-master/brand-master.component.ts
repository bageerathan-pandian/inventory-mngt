import { Component, OnInit } from "@angular/core";
import { MenuItem, MessageService, ConfirmationService } from "primeng/api";
import { Router } from "@angular/router";
import { Brand } from 'src/app/model/brand.model';
import * as _ from 'lodash';
import { BrandService } from 'src/app/shared/brand.service';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-brand-master',
  templateUrl: './brand-master.component.html',
  styleUrls: ['./brand-master.component.scss']
})
export class BrandMasterComponent implements OnInit {

    loading: boolean;
    public bradCrum: MenuItem[];
    brandList: Brand[];
    brandListSheet: any[] = [];
    displayDialog4: boolean;
    status:any = [];
    cols: any[];
    columns: any[];
    brandData:any = []
    constructor(private router:Router, private confirmationService: ConfirmationService,private messageService: MessageService,private brandService:BrandService, private commonService: CommonService,
      public sessionService: SessionService
      ) {
    }
  
    ngOnInit() {
      
      this.bradCrum = [
        {label:'',icon: 'pi pi-home',command: (event) => {
          this.router.navigate(['/inventory-mngt/dashboard'])}
        },
        {
          label: "Master",
          command: event => {
            this.router.navigate(["/inventory-mngt/master"]);
          }
        },
        {
          label: "Brand",
          command: event => {
            this.router.navigate(["/inventory-mngt/master/brand"]);
          }
        }
      ];
      this.status = [
        {label:'Active', value:1},
        {label:'De-Active', value:0},
      ]
     
     
      // if(this.user_details.role == '0'){
      //   this.getbrand();
      // }else{
        this.getbrandByCompany();
      // }
      this.cols = [
        // { field: '_id', header: '#' },
        { field: 'brand_code', header: 'Code' },
        { field: 'brand_name', header: 'brand Name' },
        { field: 'updatedAt', header: 'Updated Date' },
        { field: 'status', header: 'Status' }
        // { field: '', header: 'Action' }
    ];
  
    }
  
    // getbrand(){
    //   this.loading = true
    //   this.brandService.getBrand()
    //   .subscribe((data:any)=>{
    //     console.log('brandList',data);
    //     this.brandList = data;
    //     this.loading = false;
    //   })
    // }
  
    getbrandByCompany(){
      this.loading = true
      this.brandService.getBrandByCompany()
      .subscribe((data:any)=>{
        console.log('brandList',data);
        this.brandList = data;
        this.loading = false;
      })
    }
   
    // showDialogToAdd() {
    //   this.brandForm.reset();
    //   this.brandForm.controls['brand_code'].setValue(this.commonService.incrCode('c',this.brandList.length));
    //   this.brandForm.controls['status'].setValue(1);
    //   this.brandForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
    //   this.displayDialog4 = true;
    // }
  
   
   
  
    delete(data,index){
      console.log('delete',data,index);
      
      // this.messageService.clear();
      // this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'You want to delete this item'});
  
      this.confirmationService.confirm({
        message: 'Are you sure that you want to delete this brand?',
        accept: () => {
            //Actual logic to perform a confirmation
            this.onRowDelete(data,index);
        }
    });
    }
  
    onConfirm() {
      this.messageService.clear('c');
    }
  
    onReject() {
      this.messageService.clear('c');
    }
  
    onRowDelete(brand,index) {
      console.log(brand,index);
       this.brandService.deleteBrand(brand._id)
      .subscribe((data:any)=>{
        console.log('delete',data);
        this.brandList.splice(index, 1);
        this.brandList = [...this.brandList];
        this.messageService.add({severity:'success', summary:'Brand Deleted Successfully', detail:'Brand Deleted Successfully'});
    
      },
      error =>{
        console.log(error);
        this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
  
      })
    }
  
  
    onChangeStatus(event,id){
      console.log(event);
      let isChecked = event.checked;
      this.brandService.updateStatus(event.checked,id)
      .subscribe((data:any)=>{
        this.messageService.add({severity:'success', summary:'Status Updated Successfully', detail:'Status Updated Successfully'});
      },
      error =>{
        console.log(error);
        this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'}); 
  
      })
    }
  
    showDialogToAdd(Data) {
      this.brandData = Data;
      this.displayDialog4 = true;
    }
  
    onDialogClose4(event){
      console.log(event)  
      this.displayDialog4 = false;
      this.brandData = null
    }
  
    receiveBrand(event){
      console.log('receivebrand',event) 
          
      var sliceIndex = _.findIndex(this.brandList, function (o) { return o._id == event._id; });
      console.log(sliceIndex);
      if (sliceIndex > -1) {
        // Replace item at index using native splice
        this.brandList.splice(sliceIndex, 1, event);
        this.brandList = [...this.brandList];
      }else{
        this.brandList = [event,...this.brandList];
      }
    }
  
    
  }
  
