import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear:number;
  constructor(public auth:AuthService) {
    this.currentYear = new Date().getFullYear();
   }

  ngOnInit() {
  }

}
