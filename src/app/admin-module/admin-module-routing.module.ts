import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
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

const routes: Routes = [
  {
    path:"adminhome",
    component:AdminhomeComponent
  },
  {
    path:"view",
    component:ViewComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"voice",
    component:VoiceCdrComponent
  },
  {
    path:"sms",
    component:SmsCdrComponent
  },
  {
    path:"data",
    component:DataCdrComponent

  },
  {
    path:"mms",
    component:MmsCdrComponent
  },
  {
    path:"voip",
    component:VoipCdrComponent
  },
  {
    path:"voipvideo",
    component:VoipVideoCdrComponent
  },
  {
    path:"roamingvoice",
    component:RoamingVoiceCdrComponent
  },
  {
    path:"roamingsms",
    component:RoamingSmsCdrComponent
  },
  {
    path:"location",
    component:LocationCdrComponent
  },
  {
    path:"subscriber",
    component:SubscriberCdrComponent
  },
  {
    path:"cdrs",
    component:CdrsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
