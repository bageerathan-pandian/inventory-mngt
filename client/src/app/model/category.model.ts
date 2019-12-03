import { Company } from './company.model';

export class Category {
    _id?:string;
    category_code:string;
    category_name:string;
    company_details_id: Company
    status:number;
}
