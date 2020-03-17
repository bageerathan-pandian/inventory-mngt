import { Component, OnInit } from '@angular/core';
import { Stock } from "src/app/model/stock.model";
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

import { StockService } from 'src/app/shared/stock.service';
import { AuthService } from 'src/app/shared/auth.service';
import { CommonService } from 'src/app/shared/common.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-barcode-generate',
  templateUrl: './barcode-generate.component.html',
  styleUrls: ['./barcode-generate.component.scss']
})
export class BarcodeGenerateComponent implements OnInit {
  title:string = 'barcode';
  value:string = 'bwaysoft';
 
  loading: boolean;
  public bradCrum: MenuItem[];
  cols: any[];
  stocksList: Stock[];

  constructor(private router:Router,private auth: AuthService, private stockService:StockService, private commonService: CommonService,  public sessionService: SessionService ) {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {label:'Settings',command: (event) => {
        this.router.navigate(['/inventory-mngt/settings']);
    }},
      {label:'Barcode Genarate'},
  ];

  this.getStocksByCompany();
  
 

    this.cols = [
      { field: 'stock_code', header: 'Code' },
      { field: '_id', header: 'Barcode' },
      { field: 'stock_name', header: 'Stock Name' },
      // { field: 'category_details_id', header: 'Category' },
      { field: 'stock_qty', header: 'Stock Qty' },
      // { field: 'buying_price', header: 'Buying Price' },
      // { field: 'selling_price', header: 'Selling Price' },
      // { field: 'product_details', header: 'Product Details' },
      // { field: 'unit_details_id', header: 'Unit' },
      // { field: 'updatedAt', header: 'Updated Date' },
      { field: 'status', header: 'Status' }
      // { field: '', header: 'Action' }
  ];
    
  }

  ngOnInit() {}

  
  getStocksByCompany(){
    this.loading = true;
    this.stockService.getStockByCompany()
    .subscribe((data:any)=>{
      console.log('stocksList',data);
      this.stocksList = data;
      this.loading = false;
    })
  }

}

