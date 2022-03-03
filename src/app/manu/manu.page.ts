import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { environmentData } from 'src/environments/environment';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-manu',
  templateUrl: './manu.page.html',
  styleUrls: ['./manu.page.scss'],
})
export class ManuPage implements OnInit {

  data: any;
  mymodel: any = {};
  tabel: any = environmentData.tableNo;
  option: any;

  constructor(public actionSheetController: ActionSheetController, private svc: APIService, private http: HttpClient) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.GetAllmenu();
  }

  GetAllmenu() {
    this.svc.getMenu().subscribe(it => {
      console.log(it);
      this.data = it
    }
    )
  };

  GetMenuOption() {
    if (this.option == "allmenu") {
      this.GetAllmenu();
    }
    else {
      this.svc.GetMenuscategory(this.option).subscribe(it => {
        console.log(it)
        this.data = it
      });

    }
  }
}
