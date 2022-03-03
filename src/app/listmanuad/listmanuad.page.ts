import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-listmanuad',
  templateUrl: './listmanuad.page.html',
  styleUrls: ['./listmanuad.page.scss'],
})
export class ListmanuadPage implements OnInit {
  data: any = [];

  constructor(public actionSheetController: ActionSheetController, private svc: APIService, private navCtrl: NavController) {
    // let a = setInterval(()=>{
    //   this.GetdataOrder();
    // }, 2000)
  }
  
  ngOnInit() {
    // setInterval(()=>{ this.GetdataOrder() }, 3000);
  }
  
  ionViewDidEnter() {
    this.GetdataOrder();
  }
  
  
  GetdataOrder() {
    this.svc.Getorderappuve().subscribe(it => {
      console.log(it);
      if (it) {
        this.data = it
      }
    });
  }

  Updetestatus(Id: any) {
    this.svc.UpdateStatus(this.data, Id).subscribe(it => {
      console.log(it);
    });
  }
}
