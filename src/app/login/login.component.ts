import { Component } from '@angular/core';
import{Router} from '@angular/router';
import { ServiceService } from '../service.service';
import { SessionStorageService } from '../session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string=''
  password:string=''
  msg:string=''
  temp:string=''
  constructor(private router:Router,public service:ServiceService,public session:SessionStorageService){}

  onLoginSuccess() {
   
  this.temp=this.session.loginValidity(this.username,this.password)
  if(this.temp=="admin"){
    this.router.navigate(['/adminhome'])
  }
  else if(this.temp=="user"){
    this.router.navigate(['/userhome'])
  }
  else{
    this.msg="Enter the valid login credentials"
    this.router.navigate(['/login'])  
  }
  }
  
  
}

