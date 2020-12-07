import { Company } from './company.model';

export class Brand {
    _id?:string;
    brand_code:string;
    brand_name:string;
    company_details_id: Company
    status:number;
}
