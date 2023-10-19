import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { SessionStorageService } from '../session-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public service :ServiceService, public session:SessionStorageService){
  }

}
