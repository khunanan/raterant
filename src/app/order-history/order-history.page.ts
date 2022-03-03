import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {
  data: any;
  constructor(public actionSheetController: ActionSheetController, private svc: APIService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.GetdataHistory();
  }

  GetdataHistory() {
    this.svc.Getorderhistory().subscribe(it => {
      console.log(it);
      this.data = it
    });
  }
}
