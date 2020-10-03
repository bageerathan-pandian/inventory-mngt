import { Company } from './company.model';

export class Tax {
    _id?:string;
    company_details_id: Company
    tax_code:string;
    tax_name:string;
    tax_value_cgst:Number;
    tax_value_sgst:Number;
    status:number;
}