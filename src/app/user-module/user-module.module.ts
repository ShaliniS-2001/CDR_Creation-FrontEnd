import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { MakecallComponent } from './makecall/makecall.component';
import { ViewhistoryComponent } from './viewhistory/viewhistory.component';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    UserhomeComponent,
    MakecallComponent,
    ViewhistoryComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,HttpClientModule
  ]
})
export class UserModuleModule { }
