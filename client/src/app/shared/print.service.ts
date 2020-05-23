import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  isPrinting = false;

  constructor(private router: Router) { }

  printDocument(documentName: string, documentData: string[]) {
    this.isPrinting = true;
    console.log('printDocument')

    this.router.navigate(['/',
      { outlets: {
        'print': ['print', documentName]
        // 'print': ['print', documentName, documentData.join()]
      }}]);
  }

  onDataReady() {
    setTimeout(() => {
      console.log('onDataReady')

      window.print();
      this.isPrinting = false;
      this.router.navigate(['/',{ outlets: { print: null }}]);
    });
  }
}
