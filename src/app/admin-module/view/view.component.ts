import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/session-storage.service';
import * as XLSX from 'xlsx'; // Import the entire XLSX library
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(public session:SessionStorageService,public route:Router){}

  goToHome(){
    this.route.navigate(['/home'])
  }

  
}
