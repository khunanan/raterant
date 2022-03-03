import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderReadyPageRoutingModule } from './order-ready-routing.module';

import { OrderReadyPage } from './order-ready.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderReadyPageRoutingModule
  ],
  declarations: [OrderReadyPage]
})
export class OrderReadyPageModule {}
