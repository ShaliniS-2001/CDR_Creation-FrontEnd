import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/session-storage.service';

@Component({
  selector: 'app-cdrs',
  templateUrl: './cdrs.component.html',
  styleUrls: ['./cdrs.component.css']
})
export class CdrsComponent {
  constructor(public session:SessionStorageService,public route:Router){}

  goToHome(){
    this.route.navigate(['/home'])
  }

}
