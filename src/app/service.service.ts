import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { register } from 'src/entity/register';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url:string='http://localhost:7808';

  constructor(private httpclient:HttpClient) { }
  
  // login:boolean=false;

  addUser(reg:register)
  {
    return this.httpclient.post(`${this.url}/register`,reg);
  }

  searchPhone(phone:string){
    return this.httpclient.get(`${this.url}/register/search/${phone}`);
  }

  displayVoiceCdr(quantity:number){
    return this.httpclient.get(`${this.url}/voice/${quantity}`);
  }

  displaySmsCdr(value:number){
    return this.httpclient.get(`${this.url}/sms/${value}`);
  }

  displayDataCdr(quantity:number){
    return this.httpclient.get(`${this.url}/data/${quantity}`);
  }

  displayMmsCdr(value:number){
    return this.httpclient.get(`${this.url}/mms/${value}`);
  }

  displayVoipCdr(value:number){
    return this.httpclient.get(`${this.url}/voip/${value}`);
  }

  displayVoipVideoCdr(value:number){
    return this.httpclient.get(`${this.url}/voipvideo/${value}`);
  }

  displayRoamingVoiceCdr(value:number){
    return this.httpclient.get(`${this.url}/roaming/${value}`);
  }

  displayRoamingSmsCdr(value:number){
    return this.httpclient.get(`${this.url}/roamingsms/${value}`);
  }

  displayLocationCdr(value:number){
    return this.httpclient.get(`${this.url}/location/${value}`);
  }

  displaySubscriberCdr(value:number){
    return this.httpclient.get(`${this.url}/subscriber/${value}`);
  }

}
