import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})
export class FooterComponent implements OnInit {

  version: string;
  copyRightYear:  any

  constructor() { }

  ngOnInit() {
    this.version = environment.version;
    this.copyRightYear =  moment().format('YYYY')

  }

}
