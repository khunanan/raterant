import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  myId: any;
  data: any = {};
  constructor(private activatedRoute: ActivatedRoute, private svc: APIService) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('tabel');
    console.log(this.myId);
    this.svc.Getorderbasket(this.myId).subscribe(it => {
      console.log(it);
      this.data = it;
    });
  }

  DeleteMenuOrder(id: any, idmenu: any) {
    this.svc.Deletemanuorder(id, idmenu).subscribe(it => {
      console.log(it);
    });
  }

  ConfirmOrder(id: any) {
    this.svc.ConfirmOrder(this.data, id).subscribe(it => {
      console.log(it);
    });
  }
}
