import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { SessionService } from 'src/app/shared/session.service';
import { ReportService } from 'src/app/shared/report.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss'],
  providers :[ConfirmationService]
})
export class SalesReportComponent implements OnInit {

  loading: boolean;
  public bradCrum: MenuItem[];
  cols: any[];
  invoiceList: any = [];
  reportListSheet: any = []
  selectedDate = {start: moment().format(), end: moment().format()};
  alwaysShowCalendars: boolean;
  ranges: any = {
    'Today': [moment().format(), moment().format()],
    'Yesterday': [moment().subtract(1, 'days').format(), moment().subtract(1, 'days').format()],
    'Last 7 Days': [moment().subtract(6, 'days').format(), moment().format()],
    'Last 30 Days': [moment().subtract(29, 'days').format(), moment().format()],
    'This Month': [moment().startOf('month').format(), moment().endOf('month').format()],
    'Last Month': [moment().subtract(1, 'month').startOf('month').format(), moment().subtract(1, 'month').endOf('month').format()]
  }
  constructor(private router:Router,private reportService:ReportService, public sessionService: SessionService ) {
      this.alwaysShowCalendars = true;
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },    
      {label:'Reports',command: (event) => {
        this.router.navigate(['/inventory-mngt/reports'])}
      },
      {label:'Sales report'},
  ];
  
    
    this.cols = [
      // { field: '_id', header: '#' },
      { field: 'invoice_code', header: 'Code' },
      { field: 'invoice_date', header: 'Invoice Date' },
      { field: 'sub_total', header: 'Sub Total' },
      { field: 'discount', header: 'Discount' },
      { field: 'grand_total', header: 'Grand Total' },
      { field: 'payment_type', header: 'Payment Type' },
      { field: 'updatedAt', header: 'Updated Date' },
      { field: 'payment_status', header: 'Status' }
  ];

     
  }

  ngOnInit() {

    console.log(this.selectedDate)
    this.getSalesReportByCompany(this.selectedDate.start, this.selectedDate.end);
  
  }

  change(event){
    console.log(event)
    this.getSalesReportByCompany(event.startDate, event.endDate);
    
  }

  getSalesReportByCompany(from_date, to_date){
    console.log(from_date, to_date)
    this.loading = true
    this.reportService.getSalesReportByCompany(from_date, to_date)
    .subscribe((data:any)=>{
      console.log('invoiceList',data);
      this.invoiceList = data;
      this.loading = false;   for(let sheetData of data){
        this.reportListSheet.push({
          'Invoice Code' : sheetData.invoice_details_id.invoice_code,
          'Invoice Date' : new Date(sheetData.invoice_details_id.invoice_date),
          'Sub Total' : sheetData.invoice_details_id.sub_total,
          'Discount' : sheetData.invoice_details_id.discount,
          'CGST' : sheetData.invoice_details_id.cgst,
          'SGST' : sheetData.invoice_details_id.sgst,
          'Total Price' : sheetData.invoice_details_id.grand_total,
          'Payment Type' : sheetData.invoice_details_id.payment_type  == 1 ? 'Cash' : 'Card',
          'Updated date'  : new Date(sheetData.updatedAt),
          'Payment Status' : sheetData.payment_status == 1 ? 'Paid' : 'Not Paid'
   
        })
      }
    })
  }


exportExcel() {
  import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.reportListSheet);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "salesReportTable");
  });
}

saveAsExcelFile(buffer: any, fileName: string): void {
  import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
          type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  });
}


}
