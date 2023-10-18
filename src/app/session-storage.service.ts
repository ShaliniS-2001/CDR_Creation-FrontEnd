import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private log:boolean=false

  navbar:string=''


  constructor(private router:Router) { }
  setItem(key:string,value:any): void {
    sessionStorage.setItem(key,JSON.stringify(value));
  }

  getItem(key:string): any{
    const storedvalue = sessionStorage.getItem(key);
    return storedvalue ? JSON.parse(storedvalue) : null;
  }

  removeItem(key:string): void {
    sessionStorage.removeItem(key);
  }

  loginValidity(username:any,password:any)
  {
    if(username=='admin' && password == 'Admin@123')
    {
      this.log=true;
      this.setItem('admin','Admin@123');
      this.navbar='/adminhome'
      return "admin";
    }
    else if(username=='shalini@gmail.com' && password=='lini@2001'){
      this.log=true;
      this.setItem('admin','Admin@123');
      this.navbar='/userhome'
      return "user";

    }
    else{
      return "invalid"
    }
  }

  islogined(): boolean
  {
    return !!this.getCurrentUser();
  }

  getCurrentUser(): any{
    return this.getItem('admin');
  }

  logout():any{
    this.removeItem('admin');
    this.router.navigateByUrl("/home");
  }
}
