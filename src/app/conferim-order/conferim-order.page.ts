import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-conferim-order',
  templateUrl: './conferim-order.page.html',
  styleUrls: ['./conferim-order.page.scss'],
})
export class ConferimOrderPage implements OnInit {
  myId: any;
  data: any = {};

  constructor(private activatedRoute: ActivatedRoute, private svc: APIService, private navCtrl: NavController) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.myId);
    this.svc.GetMenusOrderbyid(this.myId).subscribe(it => {
      console.log(it);
      this.data = it;
    });
  }

  UpdeteStatus(){
    this.svc.UpdateStatusOrderReady(this.data, this.myId).subscribe(it => {
      if (it) {
        console.log(it);
        this.navCtrl.pop();
      }
    });
  }

}
