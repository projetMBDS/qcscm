import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplatesPageRoutingModule } from './templates-routing.module';

import { TemplatesPage } from './templates.page';
import { TemplateComponent }  from '../../component/template/template.component';
import { ModalPageComponent } from "../../component/modal-page/modal-page.component"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplatesPageRoutingModule
  ],
  declarations: [TemplatesPage,TemplateComponent,ModalPageComponent],
  entryComponents:[TemplateComponent,ModalPageComponent]
})
export class TemplatesPageModule {}
