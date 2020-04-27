import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private titleService: Title) { }

  setDocTitle(title: string) {
    console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(title);
  }

  // getDocTitle(title: string) {
  //   console.log('current title:::::' + this.titleService.getTitle());
  //   this.titleService.setTitle(title);
  // }


}
