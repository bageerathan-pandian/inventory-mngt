import { Component, ViewChild, HostListener } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { MenuItem, ConfirmationService, MessageService } from 'primeng/api';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { PushService } from './shared/push.service';
import { ConnectionService } from 'ng-connection-service';
import { ThemeService } from './shared/theme.service';
import { SessionService } from './shared/session.service';
import { LoaderService } from './shared/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ConfirmationService,PushService,ConnectionService]
})
export class AppComponent {
  title = 'Inventory Management';  
  showLoader: boolean;
  theme: string; 
  items2: MenuItem[];
  notificationCount: Number = 0
  status:any;
  isConnected = true;
  showValue: boolean = true
  constructor(public auth:AuthService,
    private themeService: ThemeService,
    private loaderService: LoaderService,
    public sessionService: SessionService,private messageService: MessageService,private router:Router,private confirmationService: ConfirmationService, public pushService: PushService,private connectionService: ConnectionService){
    this.sessionService.setItem("access_token","0061f705d47142c5ada1a37e9bcf05ef");
    console.log('isConnected','cl')
    var theme = this.sessionService.getItem("selected-theme");
    if (theme != null && theme.length > 0) {
      this.theme = theme;
      this.themeService.selectTheme(theme);
    } else {
      this.theme = "theme-dark";
    }

    this.connectionService.monitor().subscribe(isConnected => {
      console.log('isConnected',isConnected)
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
        // this.messageService.add({severity:'info', summary:this.status, detail:this.status});
        this.pushService.doNotification(this.status,'Connection status');

      }
      else {
        this.status = "OFFLINE";
        // this.messageService.add({severity:'info', summary:this.status, detail:this.status});
        this.pushService.doNotification(this.status,'Connection status');
      }
    })
    this.items2 = [
      {
        label: "Profile",
        icon: "pi pi-fw pi-user",
        command: event => {
          console.log(event);
          this.router.navigate(['/profile']);
        }
      },
      {
        label: "Company Info.",
        icon: "pi pi-fw pi-briefcase",
        command: event => {
          console.log(event);
          this.router.navigate(['/company-info']);
        }
      },
      {
        label: "Change Password",
        icon: "pi pi-fw pi-cog",
        command: event => {
          console.log(event);
          this.router.navigate(['/change-password']);
        }
      },
      {
        label: "Account Type",
        icon: "pi pi-fw pi-info-circle",
        command: event => {
          //event.originalEvent: Browser event
          //event.item: menuitem metadata
          console.log(event);
          this.router.navigate(['/product-buy']);
        }
      },
      {separator: true},
      {
        label: "Logout",
        icon: "pi pi-fw pi-sign-out",
        command: event => {
          //event.originalEvent: Browser event
          //event.item: menuitem metadata
          console.log(event);
          this.confirmLogout();
        }
      }
    ];
  }

  ngOnInit() {

     // TODO: assign proper type to event
     this.router.events.subscribe((event: any): void => {
      this.navigationInterceptor(event);
    });

    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });

    this.themeService.theme.subscribe((val: string) => {
      this.theme = val;
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  public beforeunloadHandler($event) {
    alert('call unload1');
 }


  @HostListener('window:unload', [ '$event' ])
  unloadHandler(event) {
    alert('call unload');
  }

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHander(event) {
    alert('call beforeunload');
  }

  confirmLogout() {
    this.confirmationService.confirm({
        message: 'Do yout want to logout?',
        accept: () => {
            //Actual logic to perform a confirmation
          this.auth.logOut();
        }
    });
}

navigationInterceptor(event): void {
  if (event instanceof NavigationStart) {
    this.showValue = true
  }
  if (event instanceof NavigationEnd) {    
    this.showValue = false   
  }
  if (event instanceof NavigationCancel) {  
    this.showValue = false 
  }
  if (event instanceof NavigationError) {  
    this.showValue = false 
  }
}


ngOnDestroy() {
  this.themeService.theme.observers.forEach(function (element) { element.complete(); });
  this.loaderService.status.observers.forEach(function (element) { element.complete(); });
}
}
