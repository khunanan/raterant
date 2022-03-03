import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlipusePage } from './slipuse.page';

const routes: Routes = [
  {
    path: '',
    component: SlipusePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlipusePageRoutingModule {}
