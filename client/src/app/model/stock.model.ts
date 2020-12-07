import { Category } from './category.model';
import { Company } from './company.model';
import { Supplier } from './supplier.model';
import { Tax } from './tax.model';
import { Unit } from './unit.model';

export class Stock {
    _id?:string;
    stock_code:string;
    stock_name:string;
    company_details_id: Company;
    category_details_id:Category;
    supplier_details_id:Supplier;
    stock_qty:number;
    buying_price:number;
    mrp:number;
    selling_price:number;
    product_details:string;
    tax_details_id:Tax;
    unit_details_id:Unit;
    status:number;
}
