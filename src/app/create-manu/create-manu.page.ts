import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environmentData } from 'src/environments/environment';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-create-manu',
  templateUrl: './create-manu.page.html',
  styleUrls: ['./create-manu.page.scss'],
})
export class CreateManuPage implements OnInit {

  base64textString: any;
  data: any;
  mymodel: any = {};
  constructor(private svc: APIService) { }

  ngOnInit() {
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

  CreateMenu() {
    // let option = { "headers": { "Content-Type": "application/json" } };
    this.mymodel = {
      "image": this.base64textString,
      "name": this.mymodel.name,
      "price": this.mymodel.price,
      "catagory": this.mymodel.catagory,
      "description": this.mymodel.description
    };
    console.log(this.mymodel);

    this.svc.CreateMenu(this.mymodel).subscribe((result: any) => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

}
