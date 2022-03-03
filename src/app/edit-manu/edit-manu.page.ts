import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-edit-manu',
  templateUrl: './edit-manu.page.html',
  styleUrls: ['./edit-manu.page.scss'],
})
export class EditManuPage implements OnInit {

  data: any = {};
  myId: any;
  base64textString: any;
  modelsnewdata: any = {};
  constructor(private activatedRoute: ActivatedRoute, private svc: APIService, private navCtrl: NavController) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.myId);
    this.svc.getMenubyid(this.myId).subscribe(it => {
      console.log(it);
      this.data = it
    });
  }

  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var x = "data:image/gif;base64,";
    var binaryString = readerEvt.target.result;
    // this.base64textString = btoa(binaryString);
    var base64textString = x + btoa(binaryString);
    this.base64textString = base64textString;
    console.log(this.base64textString);
  }

  EditMenu() {
    this.modelsnewdata = {
      "Id": this.data.id,
      "image": this.base64textString,
      "name": this.data.name,
      "price": this.data.price,
      "catagory": this.data.catagory,
    };
    console.log(this.modelsnewdata);

    if (this.base64textString == null) {
      this.svc.EditMenu(this.data).subscribe(it => {
        console.log(it);
        if (it) {
          this.navCtrl.pop();
        }
      });
    }
    else {
      this.svc.EditMenu(this.modelsnewdata).subscribe(it => {
        console.log(it);
        if (it) {
          this.navCtrl.pop();
        }
      });
    }

  }

  DeleteMenu() {
    this.svc.DeleteMenu(this.myId).subscribe(it => {
      console.log(it);
      if (it) {
        this.navCtrl.pop();
      }
    });
  }
}
