import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environmentData } from 'src/environments/environment';

@Component({
  selector: 'app-login-amin',
  templateUrl: './login-amin.page.html',
  styleUrls: ['./login-amin.page.scss'],
})
export class LoginAminPage implements OnInit {
  id: any;
  idpass: any;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.id = environmentData.tableNo;
  }

  Login() {
    if (this.id == this.idpass) {
      this.navCtrl.navigateForward("admin");
    }
    else {
      this.navCtrl.navigateRoot("/home");
    }
  }

}
