import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditManuPageRoutingModule } from './edit-manu-routing.module';

import { EditManuPage } from './edit-manu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditManuPageRoutingModule
  ],
  declarations: [EditManuPage]
})
export class EditManuPageModule {}
