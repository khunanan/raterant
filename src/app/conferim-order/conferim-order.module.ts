import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConferimOrderPageRoutingModule } from './conferim-order-routing.module';

import { ConferimOrderPage } from './conferim-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConferimOrderPageRoutingModule
  ],
  declarations: [ConferimOrderPage]
})
export class ConferimOrderPageModule {}
