import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { environmentData } from 'src/environments/environment';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-slipuse',
  templateUrl: './slipuse.page.html',
  styleUrls: ['./slipuse.page.scss'],
})
export class SlipusePage implements OnInit {
  myId: any;
  data: any = [];
  id : any;
  constructor(private activatedRoute: ActivatedRoute, private svc: APIService, private navCtrl: NavController) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    
   }

  ngOnInit() {
    this.myId = environmentData.tableNo;
    console.log(this.myId);
  }

  ionViewDidEnter() {
    this.Getdataappuve();
  }

  Getdataappuve() {
    this.svc.GetMenusOrderappuve(this.id).subscribe(it => {
      console.log(it);
      this.data = it;
    });
  }

  CreateNeworder() {
    this.navCtrl.navigateRoot("/home");
  }

}
