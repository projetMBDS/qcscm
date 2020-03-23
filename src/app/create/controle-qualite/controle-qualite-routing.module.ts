import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControleQualitePage } from './controle-qualite.page';

const routes: Routes = [
  {
    path: '',
    component: ControleQualitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControleQualitePageRoutingModule {}
