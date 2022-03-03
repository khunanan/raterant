import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodOrderadPage } from './food-orderad.page';

const routes: Routes = [
  {
    path: '',
    component: FoodOrderadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodOrderadPageRoutingModule {}
