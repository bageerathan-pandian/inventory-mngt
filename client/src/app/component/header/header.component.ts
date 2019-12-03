import { Component, OnInit } from "@angular/core";

import { MenuItem, ConfirmationService, MessageService } from "primeng/api";
import { AuthService } from "src/app/shared/auth.service";
import { Router } from '@angular/router';

import * as _ from 'lodash';
import * as moment from 'moment';
import { PushService } from 'src/app/shared/push.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  providers:[ConfirmationService]
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  items2: MenuItem[];
  user_details:any
  copyRights = moment().format('YYYY')
  constructor(private auth: AuthService,private router:Router,private confirmationService: ConfirmationService,private messageService: MessageService,private pushService: PushService) {
  }

  ngOnInit() {

    /**
       * login user by sockte
       */
      this.auth.logInSocktet().subscribe((user: any) => {
        console.log('login user');
        console.log(user);
        // console.log(this.activeUserData);
        // this.activeUserData.push(user);
        // this.messageService.add({severity:'success', summary:'Success!', detail:user.user_name + ' is Online!'});
        // if(this.auth.getUserData().role != 0){
        //     if(user.company_details_id._id == this.auth.getUserCompanyId()){
        //       this.pushService.doNotification((user.user_name).toUpperCase() + ' is Online!',user.company_details_id.company_name);
        //     }
        // }else{
          this.pushService.doNotification((user.user_name).toUpperCase() + ' is Online!',user.company_details_id.company_name);
        // }

      })
  
      this.auth.logOutSocktet().subscribe((user: any) => {
        console.log('logout user');
        console.log(user);
        // console.log(this.activeUserData);
        // var sliceIndex = _.findIndex(this.activeUserData, function (o) { return o.id == user.id; });
        // console.log(sliceIndex);
        // if (sliceIndex > -1) {
          // this.activeUserData.splice(sliceIndex, 1);
        // }
        // this.messageService.add({severity:'success', summary:'Success!', detail:user.user_name + ' is Offline!'});        
      //   if(this.auth.getUserData().role != 0){
      //     if(user.company_details_id._id == this.auth.getUserCompanyId()){
      //       this.pushService.doNotification((user.user_name).toUpperCase() + ' is Offline!',user.company_details_id.company_name);
      //     }
      // }else{
        this.pushService.doNotification((user.user_name).toUpperCase() + ' is Offline!',user.company_details_id.company_name);
      // }
      })

    this.items = [
      {
        label: "Dashboard",        
        expanded:true,
        icon: "pi pi-pw pi-home",
        command: event => {
          console.log(event);
          this.router.navigate(["/dashboard"]);
        }
      },
      {
        label: "Master",
        items: [
          // {
          //   label: "Company",
          //   disabled: (this.auth.getUserRole() == '0') ? false : true,
          //   icon: "pi pi-pw pi-briefcase",
          //   command: event => {
          //     console.log(event);
          //     this.router.navigate(["/master/company"]);
          //   }
          // },
          {
            label: "Category",
            icon: "pi pi-pw pi-tag",
            command: event => {
              console.log(event);
              this.router.navigate(["/master/category"]);
            }
          }, 
          //  {
          //   label: "Sub Category",
          //   icon: "pi pi-pw pi-tags",
          //   command: event => {
          //     console.log(event);
          //     this.router.navigate(["/master/sub-category"]);
          //   }
          // },
          {
            label: "Unit",
            icon: "pi pi-pw pi-ticket",
            command: event => {
              console.log(event);
              this.router.navigate(["/master/unit"]);
            }
          },
          {
            label: "Customers",
            icon: "pi pi-pw pi-star",
            command: event => {
              console.log(event);
              this.router.navigate(["/master/customer"]);
            }
          },
          {
            label: "Suppliers",
            icon: "pi pi-pw pi-globe",
            command: event => {
              console.log(event);
              this.router.navigate(["/master/supplier"]);
            }
          },
          {
            label: "Stock",
            icon: "pi pi-pw pi-shopping-cart",
            command: event => {
              console.log(event);
              this.router.navigate(["/master/stock"]);
            }
          },
          {
            label: "Tax",
            icon: "pi pi-pw pi-key",
            command: event => {
              console.log(event);
              this.router.navigate(["/master/tax"]);
            }
          },
          {
            label: "User",
            icon: "pi pi-pw pi-users",
            command: event => {
              console.log(event);
              this.router.navigate(["/master/user"]);
            }
          }
        ]
      },
      {
        label: "Purchase",
        // icon: "pi pi-fw pi-dollar",
        // command: event => {
        //   console.log(event);
        //   this.router.navigate(["/purchase"]);
        // }
        items: [
          {
            label: "Purchase",
            icon: "pi pi-fw pi-dollar",
            command: event => {
              console.log(event);
              this.router.navigate(["/purchase"]);
            }
          },
          {
            label: "Purchase Return",
            icon: "pi pi-fw pi-dollar",
            command: event => {
              console.log(event);
              this.router.navigate(["/purchase/purchase-return"]);
            }
          }
        ]
      },
      {
        label: "Sales",
        // expanded:true,
        // icon: "pi pi-fw pi-shopping-cart",
        // command: event => {
        //   console.log(event);
        //   this.router.navigate(["/sales"]);
        // }
        items: [
          {
            label: "Sales",
            icon: "pi pi-fw pi-shopping-cart",
            command: event => {
              console.log(event);
              this.router.navigate(["/sales"]);
            }
          },
          {
            label: "Sales Return",
            icon: "pi pi-fw pi-dollar",
            command: event => {
              console.log(event);
              this.router.navigate(["/sales/sales-return"]);
            }
          }
        ]
      },
      {
        label: "Payment",
        icon: "pi pi-fw pi-money-bill",
        command: event => {
          console.log(event);
          this.router.navigate(["/payment"]);
        }
      },
      {
        label: "Reports",
        items: [
          {
            label: "Sales Report",
            icon: "pi pi-fw pi-shopping-cart",
            command: event => {
              console.log(event);
              this.router.navigate(["/report/sales-report"]);
            }
          },
           {
            label: "Sales Return Report",
            icon: "pi pi-fw pi-shopping-cart",
            command: event => {
              console.log(event);
              this.router.navigate(["/report/sales-return-report"]);
            }
          },
          {
            label: "Purchase Report",
            icon: "pi pi-fw pi-dollar",
            command: event => {
              console.log(event);
              this.router.navigate(["/report/purchase-report"]);
            }
          },
          {
            label: "Purchase Return Report",
            icon: "pi pi-fw pi-dollar",
            command: event => {
              console.log(event);
              this.router.navigate(["/report/purchase-return-report"]);
            }
          }
        ]
      },      
      {
        label: "Quotations",
        icon: "pi pi-fw pi-file",
        command: event => {
          console.log(event);
          this.router.navigate(["/quotations"]);
        }
      },
      {
        label: "Settings",
        icon: "pi pi-fw pi-cog",
        items: [
          {
            label: "Invoice Setup",
            icon: "pi pi-fw pi-shopping-cart",
            command: event => {
              console.log(event);
              this.router.navigate(["/settings/invoice-setup"]);
            }
          },
           {
            label: "Barcode Generate",
            icon: "pi pi-fw pi-shopping-cart",
            command: event => {
              console.log(event);
              this.router.navigate(["/settings/barcode-generate"]);
            }
          },
          {
            label: "Logs",
            icon: "pi pi-fw pi-file",
            command: event => {
              console.log(event);
              this.router.navigate(["/logs"]);
            }
          },
          {
            label: "Helps",
            icon: "pi pi-fw pi-question-circle",
            command: event => {
              console.log(event);
              this.router.navigate(["/helps"]);
            }
          }
        ]
      }
      
    ];
 
  }

  confirmLogout() {
    this.confirmationService.confirm({
        message: 'Do yout want to logout?',
        accept: () => {
            //Actual logic to perform a confirmation
          this.auth.logOut();
        }
    });
}

  onSelect(event) {
    console.log(event);
  }
}
