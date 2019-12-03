import { Customer } from './customer.model';

export class Invoice {
  id?: number;
  customer_details_id: Customer;
  invoice_code : string;
  invoice_date: any;
  sub_total: any;
  discount: number;
  grand_total: number;
  payment_type: number;
  payment_status: number;
  status:number;
}
