import { Company } from './company.model';

export class Unit {
    _id?:string;
    company_details_id: Company
    unit_code:string;
    unit_name:string;
    status:number;
}