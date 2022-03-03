import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-slip',
  templateUrl: './slip.page.html',
  styleUrls: ['./slip.page.scss'],
})
export class SlipPage implements OnInit {
  myId: any;
  data: any = {};

  constructor(private activatedRoute: ActivatedRoute, private svc: APIService, private navCtrl: NavController) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('nameTable');
    console.log(this.myId);
  }

  ionViewDidEnter() {
    this.GetdataOrderTable();
  }

  GetdataOrderTable() {
    this.svc.Getordertable(this.myId).subscribe(it => {
      console.log(it);
      if (it) {
        this.data = it
      }
    });
  }

  UpdeteStatus(){
    this.svc.UpdateStatusPayment(this.data, this.myId).subscribe(it => {
      if (it) {
        console.log(it);
        this.navCtrl.pop();
      }
    });
  }

}
