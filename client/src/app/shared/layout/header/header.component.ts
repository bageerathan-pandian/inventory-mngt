import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// import { notification } from 'src/app/core/models/notification.model';
// import { UserIdleService } from 'angular-user-idle';
import { SessionService } from '../../session.service';
import { ThemeService } from '../../theme.service';
import { User } from 'src/app/model/user.model';
import { MenuDataService } from '../../menu-data.service';
import { AuthService } from '../../auth.service';
import { ConfirmationService } from 'primeng/api';
import { dateToLocalArray } from '@fullcalendar/core/datelib/marker';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  providers:[ConfirmationService]
})
export class HeaderComponent implements OnInit {

  user: User;

  displayNotifications: boolean;

  // notifications: notification[];
  notiListData: any =[];

  constructor(
    private router: Router,
    public auth:AuthService,
    public sessionService: SessionService,
    // private userIdle: UserIdleService,
    private themeService: ThemeService,
    private menuDataService: MenuDataService,
    private confirmationService: ConfirmationService
    ) {

    this.displayNotifications = false;

    var selectedTheme = this.sessionService.getItem("selected-theme");
    if (selectedTheme) {
      this.selectTheme(selectedTheme);
    }
  }

  ngOnInit() {
    this.user = this.sessionService.getItem("currentUser");
    // this.notiListData = [];
    // for (var i = 1; i <= 5; i++) {
    //   var notificationObj = {
    //     created_date: new Date(),
    //     title:'New message',
    //     msg:'New User created'
    //   }
    //   this.notiListData.push(notificationObj);
    // }

    //Start watching for user inactivity.
    // this.userIdle.startWatching();

    // Start watching when user idle is starting.
    // this.userIdle.onTimerStart().subscribe();

    // Start watch when time is up.
    // this.userIdle.onTimeout().subscribe(() => {
    //   this.logout();
    // });
  }

  
  confirmLogout() {
    this.confirmationService.confirm({
        message: 'Do yout want to logout?',
        accept: () => {
            //Actual logic to perform a confirmation
            
    this.sessionService.removeItem('active-menu');
          this.auth.logOut();
        }
    });
}

  showNotificationSidebar() {
    this.displayNotifications = true;
  }

  toggleMenu() {
    this.menuDataService.toggleMenuBar.next(true);
  }

  selectTheme(theme: string) {
    this.sessionService.setItem("selected-theme", theme);
    this.themeService.selectTheme(theme);
  }

}
