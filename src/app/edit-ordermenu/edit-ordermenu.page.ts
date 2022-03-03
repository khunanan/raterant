import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-edit-ordermenu',
  templateUrl: './edit-ordermenu.page.html',
  styleUrls: ['./edit-ordermenu.page.scss'],
})
export class EditOrdermenuPage implements OnInit {

  data: any = {};
  myId: any;
  myId2: any;
  constructor(private activatedRoute: ActivatedRoute,private svc: APIService,private navCtrl: NavController) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    this.myId2 = this.activatedRoute.snapshot.paramMap.get('item.nameManu.id');
    console.log(this.myId,this.myId2);
    this.svc.getMenuOrderbyid(this.myId,this.myId2).subscribe(it => {
      console.log(it);
      this.data = it
    });
  }

  EditMenu(){
    console.log(this.data,this.myId);
    
    this.svc.ChangeTotalOrder(this.data,this.myId).subscribe(it => {
      console.log(it);
      if (it) {
        this.navCtrl.pop();
      }
    });
  }

}
