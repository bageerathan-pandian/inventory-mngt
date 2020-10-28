
  import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
  import { CommonService } from 'src/app/shared/common.service';
  import { SessionService } from 'src/app/shared/session.service';
  import { MessageService } from 'primeng/api';
  import * as _ from 'lodash';
import { RouteService } from 'src/app/shared/route.service';
  

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.scss']
})
export class RouteFormComponent implements OnInit {
   
    @Input() routeData: any;
    @Input() displayDialog2: boolean
    
    @Output() displayChangeEvent2 = new EventEmitter();
    @Output() routeEvent = new EventEmitter();
  
    routeForm:FormGroup
    status:any
  
    constructor(private _fb: FormBuilder, private routeService:RouteService,private commonService: CommonService,
      public sessionService: SessionService, private messageService: MessageService
      ) {
   
        this.status = [
          {label:'Active', value:1},
          {label:'De-Active', value:0},
        ]
  
        this.routeForm = this._fb.group({
          _id: [''],
          company_details_id: ['',Validators.required],
          route_code: ['',Validators.required],
          route_name: ['',Validators.required],
          status: [1,Validators.required]
        })
    }
  
    ngOnInit() {
    }
  
    
    ngOnChanges() {
      console.log('displayDialog2',this.displayDialog2);   
      console.log('isObjectcatData',_.isPlainObject(this.routeData))
      if(_.isPlainObject(this.routeData)){      
        console.log('catData',this.routeData);   
        this.routeForm.controls['_id'].setValue(this.routeData._id);
        this.routeForm.controls['route_code'].setValue(this.routeData.route_code);
        this.routeForm.controls['route_name'].setValue(this.routeData.route_name);
        this.routeForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))  
        this.routeForm.controls['status'].setValue(this.routeData.status);    
        }else{           
        this.getRouteByCompany()
        }
  
    }
  
    getRouteByCompany(){
      this.routeService.getRouteByCompany()
      .subscribe((data:any)=>{
        console.log('routeList',data);  
          this.routeForm.reset();
          this.routeForm.controls['route_code'].setValue(this.commonService.incrCode('r',data.length));
          this.routeForm.controls['status'].setValue(1);
          this.routeForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))       
      })
    }
  
    public checkValidity(): void {
      Object.keys(this.routeForm.controls).forEach((key) => {
          this.routeForm.controls[key].markAsDirty();
      });
    }
  
  
    addRoute(){
      console.log('routeForm',this.routeForm);
      if(this.routeForm.invalid){      
        this.checkValidity()
        return
      }
  
        this.routeService.addRoute(this.routeForm.value)
        .subscribe((data:any)=>{
          console.log('add route',data);
          // let newData = {
          //   label : data.unit_name +' | ' +data.unit_code,
          //   value : data._id
          //  }
           this.routeEvent.emit(data)
          // this.unitList = [newData,...this.unitList];
          // this.categoryList.push(data);
          // console.log('this.unitList',this.unitList);
          this.messageService.add({severity:'success', summary:'New Route Added Successfully', detail:'New Route Added Successfully'});
          // this.stockForm.controls['unit_details_id'].setValue(data._id) 
          this.displayDialog2 = false;
        },
        error =>{
          console.log(error);
          this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
          this.displayDialog2 = false;
    
        })
    }
  
    updateRoute(){
      console.log('roureForm',this.routeForm);
      if(this.routeForm.invalid){      
        this.checkValidity()
        return
      }
  
        this.routeService.updateRoute(this.routeForm.value)
        .subscribe((data:any)=>{
          console.log('add route',data);
          // let newData = {
          //   label : data.unit_name +' | ' +data.unit_code,
          //   value : data._id
          //  }
           this.routeEvent.emit(data)
          // this.unitList = [newData,...this.unitList];
          // this.categoryList.push(data);
          // console.log('this.unitList',this.unitList);
          this.messageService.add({severity:'success', summary:'Route Updated Successfully', detail:'Route Updated Successfully'});
          // this.stockForm.controls['unit_details_id'].setValue(data._id) 
          this.displayDialog2 = false;
        },
        error =>{
          console.log(error);
          this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});
          this.displayDialog2 = false;
    
        })
    }
    
    onClose(){
      // this.displayDialog = false;
      this.displayChangeEvent2.emit(false)
    }
  
      // Work against memory leak if component is destroyed
      ngOnDestroy() {
        this.displayChangeEvent2.unsubscribe();
      }
  
  
  }
  
