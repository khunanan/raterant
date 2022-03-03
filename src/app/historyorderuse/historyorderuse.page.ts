import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { environmentData } from 'src/environments/environment';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-historyorderuse',
  templateUrl: './historyorderuse.page.html',
  styleUrls: ['./historyorderuse.page.scss'],
})
export class HistoryorderusePage implements OnInit {

  tabel: any = environmentData.tableNo;
  data: any = {};

  constructor(private svc: APIService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.GetdataOrderTable();
  }

  GetdataOrderTable() {
    this.svc.Getordertable(this.tabel).subscribe(it => {
      console.log(it);
      if (it) {
        this.data = it
      }
    });
  }

}
