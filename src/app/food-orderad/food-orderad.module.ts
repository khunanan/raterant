import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodOrderadPageRoutingModule } from './food-orderad-routing.module';

import { FoodOrderadPage } from './food-orderad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodOrderadPageRoutingModule
  ],
  declarations: [FoodOrderadPage]
})
export class FoodOrderadPageModule {}
