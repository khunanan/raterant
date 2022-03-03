import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/services/service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  data: any = [];
  myDate = new Date();

  constructor(private svc: APIService,public datepipe: DatePipe) { }

  ngOnInit() {
  }

  SaveDete() {
    let latest_date =this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
    console.log(latest_date);
    this.svc.GetdataReprot(this.myDate).subscribe(it => {
      console.log(it);
      if (it) {
         this.data = it;
      } 
    });
  }

}
