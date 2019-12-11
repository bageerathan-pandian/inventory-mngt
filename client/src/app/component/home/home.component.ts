import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  options: any;

  overlays: any[];

  constructor() { }

  ngOnInit() {
    this.options = {
      center: {lat: 10.073132, lng: 78.780151},
      zoom: 12
  };
 
}


}
