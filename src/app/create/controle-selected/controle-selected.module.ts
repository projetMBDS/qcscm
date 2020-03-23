import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControleSelectedPageRoutingModule } from './controle-selected-routing.module';

import { ControleSelectedPage } from './controle-selected.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControleSelectedPageRoutingModule
  ],
  declarations: [ControleSelectedPage]
})
export class ControleSelectedPageModule {}
