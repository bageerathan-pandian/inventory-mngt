import { Company } from './company.model';

export class Tax {
    _id?:string;
    company_details_id: Company
    tax_code:string;
    tax_name:string;
    tax_value:string;
    status:number;
}