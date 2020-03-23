import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  public bradCrum: MenuItem[];
  constructor(private router: Router, public sessionService: SessionService) {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },  
      {label:'Master'},
  ];
   }

  ngOnInit() {
  }

}
