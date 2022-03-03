import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditManuPage } from './edit-manu.page';

const routes: Routes = [
  {
    path: '',
    component: EditManuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditManuPageRoutingModule {}
