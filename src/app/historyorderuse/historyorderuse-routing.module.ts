import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryorderusePage } from './historyorderuse.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryorderusePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryorderusePageRoutingModule {}
