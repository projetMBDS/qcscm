import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayQcPageRoutingModule } from './display-qc-routing.module';

import { DisplayQcPage } from './display-qc.page';
import { ModalControleComponent} from '../component/modal-controle/modal-controle.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayQcPageRoutingModule
  ],
  declarations: [DisplayQcPage,ModalControleComponent],
  entryComponents: [ModalControleComponent]
})
export class DisplayQcPageModule {}
