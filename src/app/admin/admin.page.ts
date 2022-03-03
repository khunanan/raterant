import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  // OpenOrder() {
  //   this.navCtrl.navigateForward("listmanuad");
  // }

  // OpenOrderHistory() {
  //   this.navCtrl.navigateForward("order-history");
  // }

  // OpenCreateMenu() {
  //   this.navCtrl.navigateForward("manuad");
  // }

}
