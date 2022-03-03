import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateManuPage } from './create-manu.page';

const routes: Routes = [
  {
    path: '',
    component: CreateManuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateManuPageRoutingModule {}
