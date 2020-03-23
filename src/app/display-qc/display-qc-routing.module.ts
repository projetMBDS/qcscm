import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayQcPage } from './display-qc.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayQcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayQcPageRoutingModule {}
