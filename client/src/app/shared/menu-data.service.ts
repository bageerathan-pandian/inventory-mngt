import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {


  public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private sessionService : SessionService){}

  
  
  getMenuList() {
    if(this.sessionService.getItem('role') == 0){
      return [
        {
            Label: 'Dashboard', Icon: 'fa-home', RouterLink: '/inventory-mngt/dashboard', Childs: null, IsChildVisible: false
        },
        {
          Label: 'Master', Icon: 'fa-cart-plus', RouterLink: null, Childs: [
            { Label: 'Company', RouterLink: '/inventory-mngt/master/company', Childs: null, IsChildVisible: false },
            { Label: 'Unit', RouterLink: '/inventory-mngt/master/unit', Childs: null, IsChildVisible: false },
            { Label: 'Category', RouterLink: '/inventory-mngt/master/category', Childs: null, IsChildVisible: false },
            { Label: 'Tax', RouterLink: '/inventory-mngt/master/tax', Childs: null, IsChildVisible: false },
            { Label: 'Customer', RouterLink: '/inventory-mngt/master/customer', Childs: null, IsChildVisible: false },
            { Label: 'Supplier', RouterLink: '/inventory-mngt/master/supplier', Childs: null, IsChildVisible: false },
            { Label: 'Stock', RouterLink: '/inventory-mngt/master/stock', Childs: null, IsChildVisible: false },
            { Label: 'User', RouterLink: '/inventory-mngt/master/user', Childs: null, IsChildVisible: false }
          ], IsChildVisible: false
        },
        {
          Label: 'Purchase', Icon: 'fa-dollar', RouterLink: null, Childs: [
            { Label: 'Purchase', RouterLink: '/inventory-mngt/purchase/purchase', Childs: null, IsChildVisible: false },
            { Label: 'Purchase Return', RouterLink: '/inventory-mngt/purchase/purchase-return', Childs: null, IsChildVisible: false }
          ], IsChildVisible: false
        },
        {
          Label: 'Sales', Icon: 'fa-shopping-cart', RouterLink: null, Childs: [
            { Label: 'Sales', RouterLink: '/inventory-mngt/sales/sales', Childs: null, IsChildVisible: false },
            { Label: 'Sales Return', RouterLink: '/inventory-mngt/sales/sales-return', Childs: null, IsChildVisible: false }
          ], IsChildVisible: false
        },
        {
          Label: 'Payment', Icon: 'fa-money', RouterLink: '/inventory-mngt/payment', Childs: null, IsChildVisible: false
        },
        {
          Label: 'Reports', Icon: 'fa-shopping-cart', RouterLink: null, Childs: [
              { Label: 'Sales Report', RouterLink: '/inventory-mngt/report/sales-report', Childs: null, IsChildVisible: false },
              { Label: 'Sales Return Report', RouterLink: '/inventory-mngt/report/sales-return-report', Childs: null, IsChildVisible: false },
              { Label: 'Purchase Report', RouterLink: '/inventory-mngt/report/purchase-report', Childs: null, IsChildVisible: false },
              { Label: 'Purchase Return Report', RouterLink: '/inventory-mngt/report/purchase-return-report', Childs: null, IsChildVisible: false }
          ], IsChildVisible: false
        },
        {
          Label: 'Quotations', Icon: 'fa-file', RouterLink: '/inventory-mngt/quotations', Childs: null, IsChildVisible: false
        },
        {
          Label: 'Settings', Icon: 'fa-cog', RouterLink: null, Childs: [
              { Label: 'Invoice Setup', RouterLink: '/inventory-mngt/settings/invoice-setup', Childs: null, IsChildVisible: false },
              { Label: 'Barcode Generate', RouterLink: '/inventory-mngt/settings/barcode-generate', Childs: null, IsChildVisible: false },
              { Label: 'Logs', RouterLink: '/inventory-mngt/settings/logs', Childs: null, IsChildVisible: false },
              { Label: 'Helps', RouterLink: '/inventory-mngt/settings/help', Childs: null, IsChildVisible: false }
          ], IsChildVisible: false
        },          
        {
          Label: 'Contacts', Icon: 'fa-phone', RouterLink: '/inventory-mngt/contact', Childs: null, IsChildVisible: false
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
    }else if(this.sessionService.getItem('role') == 1 || this.sessionService.getItem('role') == 2){
      return [
        {
            Label: 'Dashboard', Icon: 'fa-home', RouterLink: '/inventory-mngt/dashboard', Childs: null, IsChildVisible: false
        },
        {
          Label: 'Master', Icon: 'fa-cart-plus', RouterLink: null, Childs: [
            { Label: 'Unit', RouterLink: '/inventory-mngt/master/unit', Childs: null, IsChildVisible: false },
            { Label: 'Category', RouterLink: '/inventory-mngt/master/category', Childs: null, IsChildVisible: false },
            { Label: 'Tax', RouterLink: '/inventory-mngt/master/tax', Childs: null, IsChildVisible: false },
            { Label: 'Customer', RouterLink: '/inventory-mngt/master/customer', Childs: null, IsChildVisible: false },
            { Label: 'Supplier', RouterLink: '/inventory-mngt/master/supplier', Childs: null, IsChildVisible: false },
            { Label: 'Stock', RouterLink: '/inventory-mngt/master/stock', Childs: null, IsChildVisible: false },
            { Label: 'User', RouterLink: '/inventory-mngt/master/user', Childs: null, IsChildVisible: false }
          ], IsChildVisible: false
        },
        {
          Label: 'Purchase', Icon: 'fa-dollar', RouterLink: null, Childs: [
            { Label: 'Purchase', RouterLink: '/inventory-mngt/purchase/purchase', Childs: null, IsChildVisible: false },
            { Label: 'Purchase Return', RouterLink: '/inventory-mngt/purchase/purchase-return', Childs: null, IsChildVisible: false }
          ], IsChildVisible: false
        },
        {
          Label: 'Sales', Icon: 'fa-shopping-cart', RouterLink: null, Childs: [
            { Label: 'Sales', RouterLink: '/inventory-mngt/sales/sales', Childs: null, IsChildVisible: false },
            { Label: 'Sales Return', RouterLink: '/inventory-mngt/sales/sales-return', Childs: null, IsChildVisible: false }
          ], IsChildVisible: false
        },
        {
          Label: 'Payment', Icon: 'fa-money', RouterLink: '/inventory-mngt/payment', Childs: null, IsChildVisible: false
        },
        {
          Label: 'Reports', Icon: 'fa-shopping-cart', RouterLink: null, Childs: [
              { Label: 'Sales Report', RouterLink: '/inventory-mngt/report/sales-report', Childs: null, IsChildVisible: false },
              { Label: 'Sales Return Report', RouterLink: '/inventory-mngt/report/sales-return-report', Childs: null, IsChildVisible: false },
              { Label: 'Purchase Report', RouterLink: '/inventory-mngt/report/purchase-report', Childs: null, IsChildVisible: false },
              { Label: 'Purchase Return Report', RouterLink: '/inventory-mngt/report/purchase-return-report', Childs: null, IsChildVisible: false }
          ], IsChildVisible: false
        },
        {
          Label: 'Quotations', Icon: 'fa-file', RouterLink: '/inventory-mngt/quotations', Childs: null, IsChildVisible: false
        },
        {
          Label: 'Settings', Icon: 'fa-cog', RouterLink: null, Childs: [
              { Label: 'Invoice Setup', RouterLink: '/inventory-mngt/settings/invoice-setup', Childs: null, IsChildVisible: false },
              { Label: 'Barcode Generate', RouterLink: '/inventory-mngt/settings/barcode-generate', Childs: null, IsChildVisible: false },
              { Label: 'Logs', RouterLink: '/inventory-mngt/settings/logs', Childs: null, IsChildVisible: false },
              { Label: 'Helps', RouterLink: '/inventory-mngt/settings/help', Childs: null, IsChildVisible: false }
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
  }else{
    return [
      {
          Label: 'Dashboard', Icon: 'fa-home', RouterLink: '/inventory-mngt/dashboard', Childs: null, IsChildVisible: false
      },
      {
        Label: 'Sales', Icon: 'fa-shopping-cart', RouterLink: null, Childs: [
          { Label: 'Sales', RouterLink: '/inventory-mngt/sales/sales', Childs: null, IsChildVisible: false },
          { Label: 'Sales Return', RouterLink: '/inventory-mngt/sales/sales-return', Childs: null, IsChildVisible: false }
        ], IsChildVisible: false
      },
      {
        Label: 'Payment', Icon: 'fa-money', RouterLink: '/inventory-mngt/payment', Childs: null, IsChildVisible: false
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
}