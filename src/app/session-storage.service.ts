import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private log:boolean=false
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
      return true;
    }
    else{
      return false;
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
