import { Customer } from './customer.model';
import { Company } from './company.model';

export class Invoice {
  _id?:string;
  company_details_id:Company;
  customer_details_id:Customer;
  product_details:any
  invoice_code:string;
  invoice_date: any
  sub_total:string;
  discount:number;
  grand_total:number;
  payment_type:number;
  payment_status:number;

  
}
