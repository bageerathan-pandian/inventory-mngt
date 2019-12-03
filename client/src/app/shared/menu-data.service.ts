import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {


  public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  
  // this.items = [
  //   {
  //     label: "Dashboard",        
  //     expanded:true,
  //     icon: "pi pi-pw pi-home",
  //     command: event => {
  //       console.log(event);
  //       this.router.navigate(["/dashboard"]);
  //     }
  //   },
  //   {
  //     label: "Master",
  //     items: [
  //       {
  //         label: "Company",
  //         disabled: (this.auth.getUserRole() == '0') ? false : true,
  //         icon: "pi pi-pw pi-briefcase",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/master/company"]);
  //         }
  //       },
  //       {
  //         label: "Category",
  //         icon: "pi pi-pw pi-tag",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/master/category"]);
  //         }
  //       }, 
  //       {
  //         label: "Unit",
  //         icon: "pi pi-pw pi-ticket",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/master/unit"]);
  //         }
  //       },
  //       {
  //         label: "Customers",
  //         icon: "pi pi-pw pi-star",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/master/customer"]);
  //         }
  //       },
  //       {
  //         label: "Suppliers",
  //         icon: "pi pi-pw pi-globe",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/master/supplier"]);
  //         }
  //       },
  //       {
  //         label: "Stock",
  //         icon: "pi pi-pw pi-shopping-cart",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/master/stock"]);
  //         }
  //       },
  //       {
  //         label: "Tax",
  //         icon: "pi pi-pw pi-key",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/master/tax"]);
  //         }
  //       },
  //       {
  //         label: "User",
  //         icon: "pi pi-pw pi-users",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/master/user"]);
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     label: "Purchase",
  //     items: [
  //       {
  //         label: "Purchase",
  //         icon: "pi pi-fw pi-dollar",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/purchase"]);
  //         }
  //       },
  //       {
  //         label: "Purchase Return",
  //         icon: "pi pi-fw pi-dollar",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/purchase/purchase-return"]);
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     label: "Sales",
  //     items: [
  //       {
  //         label: "Sales",
  //         icon: "pi pi-fw pi-shopping-cart",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/sales"]);
  //         }
  //       },
  //       {
  //         label: "Sales Return",
  //         icon: "pi pi-fw pi-dollar",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/sales/sales-return"]);
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     label: "Payment",
  //     icon: "pi pi-fw pi-money-bill",
  //     command: event => {
  //       console.log(event);
  //       this.router.navigate(["/payment"]);
  //     }
  //   },
  //   {
  //     label: "Reports",
  //     items: [
  //       {
  //         label: "Sales Report",
  //         icon: "pi pi-fw pi-shopping-cart",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/report/sales-report"]);
  //         }
  //       },
  //        {
  //         label: "Sales Return Report",
  //         icon: "pi pi-fw pi-shopping-cart",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/report/sales-return-report"]);
  //         }
  //       },
  //       {
  //         label: "Purchase Report",
  //         icon: "pi pi-fw pi-dollar",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/report/purchase-report"]);
  //         }
  //       },
  //       {
  //         label: "Purchase Return Report",
  //         icon: "pi pi-fw pi-dollar",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/report/purchase-return-report"]);
  //         }
  //       }
  //     ]
  //   },      
  //   {
  //     label: "Quotations",
  //     icon: "pi pi-fw pi-file",
  //     command: event => {
  //       console.log(event);
  //       this.router.navigate(["/quotations"]);
  //     }
  //   },
  //   {
  //     label: "Settings",
  //     icon: "pi pi-fw pi-cog",
  //     items: [
  //       {
  //         label: "Invoice Setup",
  //         icon: "pi pi-fw pi-shopping-cart",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/settings/invoice-setup"]);
  //         }
  //       },
  //        {
  //         label: "Barcode Generate",
  //         icon: "pi pi-fw pi-shopping-cart",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/settings/barcode-generate"]);
  //         }
  //       },
  //       {
  //         label: "Logs",
  //         icon: "pi pi-fw pi-file",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/logs"]);
  //         }
  //       },
  //       {
  //         label: "Helps",
  //         icon: "pi pi-fw pi-question-circle",
  //         command: event => {
  //           console.log(event);
  //           this.router.navigate(["/helps"]);
  //         }
  //       }
  //     ]
  //   }
    
  // ];

  getMenuList() {
      return [
          {
              Label: 'Dashboard', Icon: 'fa-home', RouterLink: '/dashboard', Childs: null, IsChildVisible: false
          },
          {
            Label: 'Master', Icon: 'fa-cart-plus', RouterLink: null, Childs: [
              { Label: 'Company', RouterLink: '/master/company', Childs: null, IsChildVisible: false },
              { Label: 'Category', RouterLink: '/master/category', Childs: null, IsChildVisible: false },
              { Label: 'Unit', RouterLink: '/master/unit', Childs: null, IsChildVisible: false },
              { Label: 'Tax', RouterLink: '/master/tax', Childs: null, IsChildVisible: false },
              { Label: 'Customer', RouterLink: '/master/customer', Childs: null, IsChildVisible: false },
              { Label: 'Supplier', RouterLink: '/master/supplier', Childs: null, IsChildVisible: false },
              { Label: 'Stock', RouterLink: '/master/stock', Childs: null, IsChildVisible: false },
              { Label: 'User', RouterLink: '/master/user', Childs: null, IsChildVisible: false }
            ], IsChildVisible: false
          },
          {
            Label: 'Purchase', Icon: 'fa-dollar', RouterLink: null, Childs: [
              { Label: 'Purchase', RouterLink: '/purchase', Childs: null, IsChildVisible: false },
              { Label: 'Purchase Return', RouterLink: '/purchase/purchase-return', Childs: null, IsChildVisible: false }
            ], IsChildVisible: false
          },
          {
            Label: 'Sales', Icon: 'fa-shopping-cart', RouterLink: null, Childs: [
              { Label: 'Sales', RouterLink: '/sales', Childs: null, IsChildVisible: false },
              { Label: 'Sales Return', RouterLink: '/sales/sales-return', Childs: null, IsChildVisible: false }
            ], IsChildVisible: false
          },
          {
            Label: 'Payment', Icon: 'fa-money', RouterLink: '/payment', Childs: null, IsChildVisible: false
          },
          {
            Label: 'Reports', Icon: 'fa-shopping-cart', RouterLink: null, Childs: [
                { Label: 'Sales Report', RouterLink: '/report/sales-report', Childs: null, IsChildVisible: false },
                { Label: 'Sales Return Report', RouterLink: '/report/sales-return-report', Childs: null, IsChildVisible: false },
                { Label: 'Purchase Report', RouterLink: '/report/purchase-report', Childs: null, IsChildVisible: false },
                { Label: 'Purchase Return Report', RouterLink: '/report/purchase-return-report', Childs: null, IsChildVisible: false }
            ], IsChildVisible: false
          },
          {
            Label: 'Quotations', Icon: 'fa-file', RouterLink: '/quotations', Childs: null, IsChildVisible: false
          },
          {
            Label: 'Settings', Icon: 'fa-cog', RouterLink: null, Childs: [
                { Label: 'Invoice Setup', RouterLink: '/settings/invoice-setup', Childs: null, IsChildVisible: false },
                { Label: 'Barcode Generate', RouterLink: '/settings/barcode-generate', Childs: null, IsChildVisible: false },
                { Label: 'Logs', RouterLink: '/settings/logs', Childs: null, IsChildVisible: false },
                { Label: 'Helps', RouterLink: '/settings/help', Childs: null, IsChildVisible: false }
            ], IsChildVisible: false
          },
          // {
          //     Label: 'Menu Level 1', Icon: 'fa-cart-plus', RouterLink: null, Childs: [
          //         { Label: 'Menu Level 1.1', RouterLink: null, Childs: null, IsChildVisible: false },
          //         {
          //             Label: 'Menu Level 1.2', RouterLink: null, IsChildVisible: false, Childs: [
          //                 { Label: 'Menu Level 1.2.1', RouterLink: null, Childs: null, IsChildVisible: false },
          //                 { Label: 'Menu Level 1.2.2', RouterLink: null, Childs: null, IsChildVisible: false }
          //             ]
          //         }
          //     ], IsChildVisible: false
          // }
      ];
  }
}