import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManuadPage } from './manuad.page';

const routes: Routes = [
  {
    path: '',
    component: ManuadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManuadPageRoutingModule {}
