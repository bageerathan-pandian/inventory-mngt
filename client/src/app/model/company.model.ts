import { ProductPayment } from './product_payment.model';

export class Company {
    _id?:string;
    company_code:string;
    company_name:string;
    company_address:string;
    company_image:string;
    owner_name:string;
    country_code:string;
    country_dialCode:number;
    product_payment_details_id: ProductPayment
    phone:string;
    gstin:string;
    status:number;
}