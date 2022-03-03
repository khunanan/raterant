import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environmentData } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tabelNo: string = "";
  Idadmin: any = "9999";

  ImageArray: any = [];

  slideOpts = {
    initialSlide: 3,
    speed: 3000
  };
  constructor(private navCtrl: NavController) {
    this.ImageArray = [
      { 'image': '../assets/icon/กระเพรา.jpg' },
      { 'image': '../assets/icon/กระเพรา.jpg' },
      { 'image': '../assets/icon/กระเพรา.jpg' }
    ]
  }

  LoginTable() {
    environmentData.tableNo = this.tabelNo;
    console.log(environmentData.tableNo);

    if (this.tabelNo == this.Idadmin) {
      this.navCtrl.navigateForward("login-amin");
    }
    else {
      this.navCtrl.navigateRoot("manu");
    }
  }
}

@Component({
  selector: 'slides-example',
  template: `
    <ion-slides pager="true" [options]="slideOpts">
      <ion-slide>
        <h1>Slide 1</h1>
      </ion-slide>
      <ion-slide>
        <h1>Slide 2</h1>
      </ion-slide>
      <ion-slide>
        <h1>Slide 3</h1>
      </ion-slide>
    </ion-slides>
  `
})
export class SlideExample {
  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 3,
    speed: 3000
  };
  constructor() { }
}
