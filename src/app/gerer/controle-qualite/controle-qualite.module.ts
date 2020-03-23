import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControleQualitePageRoutingModule } from './controle-qualite-routing.module';

import { ControleQualitePage } from './controle-qualite.page';
import { ControleComponent } from '../../component/controle/controle.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControleQualitePageRoutingModule
  ],
  declarations: [ControleQualitePage,ControleComponent],
  entryComponents:[ControleComponent]
})
export class ControleQualitePageModule {}
