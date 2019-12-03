import { Company } from './company.model';

export class Customer {
    _id?:string;
    customer_code:string;
    customer_name:string;
    customer_address:string;
    company_details_id: Company
    phone:string;
    status:number;
}