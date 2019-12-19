import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  /**
     * set session storage item
     * @param key 
     * @param value 
     */
    setItem(key: string, value: any) {
      sessionStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * get session storage item
   * @param key 
   */
  getItem(key: string): any {
      var value = sessionStorage.getItem(key);
      return JSON.parse(value);
  }

  /**
   * remove session storage item
   * @param key
   */
  removeItem(key: string) {
      sessionStorage.removeItem(key);
  }

  /**
   * remove all session storage items
   */
  clear() {
      sessionStorage.clear();
  }

  setUserCredentials(data){
    console.log('setUserCredentials',data)
    _.mapValues(data, (value, key) => {  (key != 'company_details_id') ? this.setItem(key,value) :'';  }) // set user details
    _.mapValues(data.company_details_id, (value, key) => { (key == '_id') ? this.setItem('company_id',value) : this.setItem(key,value);    }) // set company details
  }

}
