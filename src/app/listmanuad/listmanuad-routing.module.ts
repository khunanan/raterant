import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListmanuadPage } from './listmanuad.page';

const routes: Routes = [
  {
    path: '',
    component: ListmanuadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListmanuadPageRoutingModule {}
