import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderReadyPage } from './order-ready.page';

const routes: Routes = [
  {
    path: '',
    component: OrderReadyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderReadyPageRoutingModule {}
