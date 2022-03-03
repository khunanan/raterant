import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-manuad',
  templateUrl: './manuad.page.html',
  styleUrls: ['./manuad.page.scss'],
})
export class ManuadPage implements OnInit {
  option: any;

  data: any;
  mymodel: any = {};
  constructor(public actionSheetController: ActionSheetController, private svc: APIService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.GetAllmenu();
  }

  GetAllmenu() {
    this.svc.getMenu().subscribe(it => {
      console.log(it);
      this.data = it
    }
    )
  };

  GetMenuOption() {
    if (this.option == "allmenu") {
      this.GetAllmenu();
    }
    else {
      this.svc.GetMenuscategory(this.option).subscribe(it => {
        console.log(it)
        this.data = it
      });

    }

  }

  OpenCreateMenu() {
    this.navCtrl.navigateForward("create-manu");
  }


}
