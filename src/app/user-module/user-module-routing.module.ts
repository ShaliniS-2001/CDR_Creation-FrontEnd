import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { MakecallComponent } from './makecall/makecall.component';
import { ViewhistoryComponent } from './viewhistory/viewhistory.component';

const routes: Routes = [
  {
    path:"userhome",
    component:UserhomeComponent
  },
  {
    path:"makecall",
    component:MakecallComponent
  },
  {
    path:"viewhistory",
    component:ViewhistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
