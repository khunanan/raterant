import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodOrderusPageRoutingModule } from './food-orderus-routing.module';

import { FoodOrderusPage } from './food-orderus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodOrderusPageRoutingModule
  ],
  declarations: [FoodOrderusPage]
})
export class FoodOrderusPageModule {}
