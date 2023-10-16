import { Component } from '@angular/core';
import { register } from 'src/entity/register';
import { plan } from 'src/entity/plan';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  plans:string[];
  reg:register;
  hasError:boolean=false;

  result:any
  constructor(private service:ServiceService,private router:Router){
    this.plans=plan;
    this.reg=new register('','','','','','');
  }
  
  validate(data:string)
  {
    if(data === 'default') 
      this.hasError=true
      else
      this.hasError=false
  }

  onSubmit() {
    console.log(this.reg);
    this.service.searchPhone(this.reg.phone).subscribe((e)=>
    {
      this.result=e
      console.log(this.result);
      if(this.result.length >0){
        Swal.fire({
          icon:'error',
          title:'PHONE NUMBER ALREADY EXIST TRY TO LOGIN!!'
        }).then(() =>{
          this.router.navigate(['login'])
        })
  
      }
      else{
        this.service.addUser(this.reg).subscribe();
      Swal.fire({
        icon:'success',
        title:'REGISTRATION SUCCESS !!'
      }).then(() =>{
        this.router.navigate(['login'])
      })
  
      }
    });
    
  }
}
