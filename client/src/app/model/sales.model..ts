import { Invoice } from './invoice.model';
import { Customer } from './customer.model';
import { Stock } from './stock.model';

export class Sales {
_id?:string;
invoice_details_id:Invoice;
customer_details_id:Customer;
stock_details_id:Stock;
stock_qty:number;
stock_price:number;
stock_total_price:number;
sub_total:number;
discount:number;
grand_total:number;
payment_type:number;
paid_amount:number;
balance_amount:number;
payment_status:number;
status:number;
}

