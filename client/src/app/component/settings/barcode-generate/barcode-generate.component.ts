import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode-generate',
  templateUrl: './barcode-generate.component.html',
  styleUrls: ['./barcode-generate.component.scss']
})
export class BarcodeGenerateComponent implements OnInit {
  title:string = 'barcode';
  value:string = 'bwaysoft';
  constructor() { }

  ngOnInit() {
  }

}
