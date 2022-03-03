import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListmanuadPageRoutingModule } from './listmanuad-routing.module';

import { ListmanuadPage } from './listmanuad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListmanuadPageRoutingModule
  ],
  declarations: [ListmanuadPage]
})
export class ListmanuadPageModule {}
