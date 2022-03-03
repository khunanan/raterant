import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { environmentData } from 'src/environments/environment';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-food-orderus',
  templateUrl: './food-orderus.page.html',
  styleUrls: ['./food-orderus.page.scss'],
})
export class FoodOrderusPage implements OnInit {

  data: any = {};
  myId: any;
  mymodel: any = {};
  tatol: any;
  description: any;

  constructor(private activatedRoute: ActivatedRoute, private svc: APIService, private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.myId);
    this.svc.getMenubyid(this.myId).subscribe(it => {
      console.log(it);
      this.data = it
    });
  }

  AddtoCart() {
    this.mymodel = {
      "tatol": this.tatol,
      "nameManu": this.data,
      "description": this.description,
    };
    console.log(this.mymodel);

    this.svc.AddMenuToCart(this.mymodel, environmentData.tableNo).subscribe(it => {
      console.log(it);
      if (it) {
        this.navCtrl.pop();
      }
    });


  }

}
