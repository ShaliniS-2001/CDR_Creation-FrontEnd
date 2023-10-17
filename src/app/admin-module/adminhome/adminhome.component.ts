import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/session-storage.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  constructor(public session:SessionStorageService,public route:Router){}

  goToHome(){
    this.route.navigate(['/home'])
  }


}
