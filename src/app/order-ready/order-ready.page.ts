import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-order-ready',
  templateUrl: './order-ready.page.html',
  styleUrls: ['./order-ready.page.scss'],
})
export class OrderReadyPage implements OnInit {
  data: any;

  constructor( private svc: APIService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.GetdataHistory();
  }

  GetdataHistory() {
    this.svc.GetOrdersReady().subscribe(it => {
      console.log(it);
      this.data = it
    });
  }

}
