import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryorderusePageRoutingModule } from './historyorderuse-routing.module';

import { HistoryorderusePage } from './historyorderuse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryorderusePageRoutingModule
  ],
  declarations: [HistoryorderusePage]
})
export class HistoryorderusePageModule {}
