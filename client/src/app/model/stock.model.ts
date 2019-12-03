import { Category } from './category.model';
import { Company } from './company.model';
import { Unit } from './unit.model';

export class Stock {
    _id?:string;
    stock_code:string;
    stock_name:string;
    company_details_id: Company
    category_details_id:Category
    stock_qty:number;
    buying_price:number;
    selling_price:number;
    product_details:string;
    unit_details_id:Unit;
    status:number;
}
