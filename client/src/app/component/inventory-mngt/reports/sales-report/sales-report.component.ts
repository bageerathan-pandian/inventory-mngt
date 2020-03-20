import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { ConfirmationService, MessageService, MenuItem } from 'primeng/api';
import { SessionService } from 'src/app/shared/session.service';
import { CommonService } from 'src/app/shared/common.service';
import { ReportService } from 'src/app/shared/report.service';
declare var $:any
@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss'],
  providers :[ConfirmationService]
})
export class SalesReportComponent implements OnInit {

  loading: boolean;
  public bradCrum: MenuItem[];
  displayDialog: boolean;
  display:boolean
  cols: any[];
  status:any = [];
  invoiceList: any = [];
  reportListSheet: any = []
  data:any;
  from_date: any
  to_date: any
  constructor(private router:Router, private auth:AuthService, private confirmationService: ConfirmationService,private messageService: MessageService,private reportService:ReportService,private commonService: CommonService,
    
    public sessionService: SessionService
    ) {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {label:'reports/Sales report'},
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
    var self = this;
    $(function() {

      var start = moment().subtract(29, 'days');
      var end = moment();
  
     
      function cb(start, end) {

        var from_date = start.format();
        var to_date = end.format();
        self.from_date = start.format();
        self.to_date = end.format();
          $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
          console.log("start ", from_date);
          console.log("end ", to_date);
          self.getSalesReportByCompany(self.from_date, self.to_date);
      }
  
      $('#reportrange').daterangepicker({
          startDate: start,
          endDate: end,
          ranges: {
             'Today': [moment(), moment()],
             'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
             'Last 7 Days': [moment().subtract(6, 'days'), moment()],
             'Last 30 Days': [moment().subtract(29, 'days'), moment()],
             'This Month': [moment().startOf('month'), moment().endOf('month')],
             'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          }
      }, cb);
  
      cb(start, end);
  
  });
  }

  getReport(){
    
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
          'Invoice Date' : sheetData.invoice_details_id.invoice_date,
          'Stock Name' : sheetData.stock_details_id.stock_name,
          'Stock Qty' : sheetData.stock_qty,
          'Stock Price' : sheetData.stock_price,
          'Discount' : sheetData.discount,
          'Total Price' : sheetData.grand_total,
          'Payment Type' : sheetData.payment_type,
          'Updated date'  : sheetData.updatedAt,
          'Payment Status' : sheetData.payment_status == 1 ? 'Paid' : 'Not Paid'
        })
      }
    })
  }


public checkValidity(): void {
  // Object.keys(this.invoiceForm.controls).forEach((key) => {
  //     this.invoiceForm.controls[key].markAsDirty();
  // });
}

save() {
 
}



onRowEdit(invoice) {
  console.log(invoice);
  
}



onRowUpdate(invoice) {
  console.log(invoice); 

}

onChangeStatus(event){
  console.log(event);
  let isChecked = event.checked;
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
