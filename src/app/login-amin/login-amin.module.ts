import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAminPageRoutingModule } from './login-amin-routing.module';

import { LoginAminPage } from './login-amin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAminPageRoutingModule
  ],
  declarations: [LoginAminPage]
})
export class LoginAminPageModule {}
