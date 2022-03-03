import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateManuPageRoutingModule } from './create-manu-routing.module';

import { CreateManuPage } from './create-manu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateManuPageRoutingModule
  ],
  declarations: [CreateManuPage]
})
export class CreateManuPageModule {}
