import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControleSelectedPage } from './controle-selected.page';

const routes: Routes = [
  {
    path: '',
    component: ControleSelectedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControleSelectedPageRoutingModule {}
