import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAminPage } from './login-amin.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAminPageRoutingModule {}
