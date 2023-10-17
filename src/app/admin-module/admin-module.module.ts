import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { VoiceCdrComponent } from './voice-cdr/voice-cdr.component';
import { SmsCdrComponent } from './sms-cdr/sms-cdr.component';
import { DataCdrComponent } from './data-cdr/data-cdr.component';
import { MmsCdrComponent } from './mms-cdr/mms-cdr.component';
import { VoipCdrComponent } from './voip-cdr/voip-cdr.component';
import { VoipVideoCdrComponent } from './voip-video-cdr/voip-video-cdr.component';
import { RoamingVoiceCdrComponent } from './roaming-voice-cdr/roaming-voice-cdr.component';
import { RoamingSmsCdrComponent } from './roaming-sms-cdr/roaming-sms-cdr.component';
import { LocationCdrComponent } from './location-cdr/location-cdr.component';
import { SubscriberCdrComponent } from './subscriber-cdr/subscriber-cdr.component';
import { CdrsComponent } from './cdrs/cdrs.component';

import {DataTablesModule} from 'angular-datatables'

@NgModule({
  declarations: [
    ViewComponent,
    SearchComponent,
    AdminhomeComponent,
    VoiceCdrComponent,
    SmsCdrComponent,
    DataCdrComponent,
    MmsCdrComponent,
    VoipCdrComponent,
    VoipVideoCdrComponent,
    RoamingVoiceCdrComponent,
    RoamingSmsCdrComponent,
    LocationCdrComponent,
    SubscriberCdrComponent,
    CdrsComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,HttpClientModule,FormsModule,DataTablesModule
  ]
})
export class AdminModuleModule { }
