import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlipusePageRoutingModule } from './slipuse-routing.module';

import { SlipusePage } from './slipuse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlipusePageRoutingModule
  ],
  declarations: [SlipusePage]
})
export class SlipusePageModule {}
