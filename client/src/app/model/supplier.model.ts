import { Company } from './company.model';

export class Supplier {
    _id?:string;    
    company_details_id: Company
    supplier_code:string;
    supplier_name:string;
    supplier_address:string;
    phone:string;
    status:number;
}