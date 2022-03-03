import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManuadPageRoutingModule } from './manuad-routing.module';

import { ManuadPage } from './manuad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManuadPageRoutingModule
  ],
  declarations: [ManuadPage]
})
export class ManuadPageModule {}
