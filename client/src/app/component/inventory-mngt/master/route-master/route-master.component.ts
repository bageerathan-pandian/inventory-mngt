
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem, ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Unit } from 'src/app/model/unit.model';

import * as _ from 'lodash';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';
import { Route } from '@angular/compiler/src/core';
import { RouteService } from 'src/app/shared/route.service';


@Component({
  selector: 'app-route-master',
  templateUrl: './route-master.component.html',
  styleUrls: ['./route-master.component.scss']
})
export class RouteMasterComponent implements OnInit {

  loading: boolean;
  public bradCrum: MenuItem[];
  routeList: Unit[];
  displayDialog2: boolean;
  car: any = {};
  status: any = [];
  cols: any[];
  routeData: any = []
  constructor(private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService, private routeService: RouteService, private commonService: CommonService,
    public sessionService: SessionService
  ) {
  }

  ngOnInit() {

    this.bradCrum = [
      {
        label: '', icon: 'pi pi-home', command: (event) => {
          this.router.navigate(['/inventory-mngt/dashboard'])
        }
      },
      {
        label: "Master",
        command: event => {
          this.router.navigate(["/inventory-mngt/master"]);
        }
      },
      {
        label: "Route",
        command: event => {
          this.router.navigate(["/inventory-mngt/master/route"]);
        }
      }
    ];
    this.status = [
      { label: 'Active', value: 1 },
      { label: 'De-Active', value: 0 },
    ]


    // if(this.user_details.role == '0'){
    //   this.getTax();
    // }else{
    this.getRouteByCompany();
    // }
    this.cols = [
      // { field: '_id', header: '#' },
      { field: 'route_code', header: 'Code' },
      { field: 'route_name', header: 'Route Name' },
      { field: 'updatedAt', header: 'Updated Date' },
      { field: 'status', header: 'Status' }
      // { field: '', header: 'Action' }
    ];
  }

  getRoute() {
    this.loading = true
    this.routeService.getRoute()
      .subscribe((data: any) => {
        console.log('routeList', data);
        this.routeList = data;
        this.loading = false;
      })
  }

  getRouteByCompany() {
    this.loading = true
    this.routeService.getRouteByCompany()
      .subscribe((data: any) => {
        console.log('routeList', data);
        this.routeList = data;
        this.loading = false;
      })
  }


  showDialogToAdd() {
    // this.unitForm.reset();
    // this.unitForm.controls['unit_code'].setValue(this.commonService.incrCode('u',this.routeList.length));
    // this.unitForm.controls['status'].setValue(1);
    // this.unitForm.controls['company_details_id'].setValue(this.sessionService.getItem('company_id'))
    this.displayDialog2 = true;
  }




  delete(data, index) {
    console.log('delete', data, index);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this Route?',
      accept: () => {
        //Actual logic to perform a confirmation
        this.onRowDelete(data, index);
      }
    });
  }


  onRowEdit(route: Route) {
    console.log(route);
    this.displayDialog2 = true;
    this.routeData = route
    // this.unitForm.controls['_id'].setValue(unit._id);
    // this.unitForm.controls['unit_code'].setValue(unit.unit_code);
    // this.unitForm.controls['unit_name'].setValue(unit.unit_name);
    // this.unitForm.controls['status'].setValue(unit.status);
  }

  onRowDelete(tax, index) {
    console.log(tax, index);
    this.routeService.deleteRoute(tax._id)
      .subscribe((data: any) => {
        console.log('delete', data);
        this.routeList.splice(index, 1);
        this.routeList = [...this.routeList];
        this.messageService.add({ severity: 'success', summary: 'Route Deleted Successfully', detail: 'Route Deleted Successfully' });

      },
        error => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });

        })
  }


  onChangeStatus(event, id) {
    console.log(event);
    let isChecked = event.checked;
    this.routeService.updateStatus(event.checked, id)
      .subscribe((data: any) => {
        this.messageService.add({ severity: 'success', summary: 'Status Updated Successfully', detail: 'Status Updated Successfully' });
      },
        error => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Oopss!', detail: 'Something went wrong!' });

        })
  }



  onDialogClose2(event) {
    console.log(event)
    this.displayDialog2 = false;
  }

  receiveRoute(event) {
    console.log('receiveRoute', event)

    var sliceIndex = _.findIndex(this.routeList, function (o) { return o._id == event._id; });
    console.log(sliceIndex);
    if (sliceIndex > -1) {
      // Replace item at index using native splice
      this.routeList.splice(sliceIndex, 1, event);
      this.routeList = [...this.routeList];
    } else {
      this.routeList = [event, ...this.routeList];
    }
  }

}

