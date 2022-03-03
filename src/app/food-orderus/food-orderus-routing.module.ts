import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodOrderusPage } from './food-orderus.page';

const routes: Routes = [
  {
    path: '',
    component: FoodOrderusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodOrderusPageRoutingModule {}
