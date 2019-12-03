import { Company } from './company.model';

export class User {
    _id?:string; 
    company_details_id: Company
    user_code:string;
    user_name:string;
    user_image:string;
    user_email:string;
    user_pwd:string;
    cnfirm_user_pwd:string;
    phone:string;
    role:number;
    status:number;
}
