import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditOrdermenuPage } from './edit-ordermenu.page';

const routes: Routes = [
  {
    path: '',
    component: EditOrdermenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditOrdermenuPageRoutingModule {}
