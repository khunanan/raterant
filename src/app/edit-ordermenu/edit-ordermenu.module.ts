import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditOrdermenuPageRoutingModule } from './edit-ordermenu-routing.module';

import { EditOrdermenuPage } from './edit-ordermenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditOrdermenuPageRoutingModule
  ],
  declarations: [EditOrdermenuPage]
})
export class EditOrdermenuPageModule {}
