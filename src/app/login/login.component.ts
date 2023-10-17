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

  constructor(private router:Router,public service:ServiceService,public session:SessionStorageService){}

  onLoginSuccess() {
  // const adminUsername="admin";
  // const adminPassword="Admin@123";
  //   const ename=this.username.trim();
  //   const epass=this.password.trim();
  
  // if(ename && epass) {
  //   if(this.username===adminUsername && this.password===adminPassword){
  //     this.router.navigate(['/adminhome'])
  //     this.service.login = true;
  //   }

  //   else{
  //     this.router.navigate(['/userhome']);
  //     this.service.login = true;
  //   }
  // }
  // else{
  //   console.log('enter valid pass');
  // }
   
  const temp=this.session.loginValidity(this.username,this.password)
  if(temp)
  this.router.navigate(['/adminhome'])
  }
  
}

