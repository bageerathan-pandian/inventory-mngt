import { Company } from './company.model';

export class Route {
    _id?:string;
    company_details_id: Company
    route_code:string;
    route_name:string;
    status:number;
}