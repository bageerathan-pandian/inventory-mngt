import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SessionService } from '../../session.service';
import { MenuDataService } from '../../menu-data.service';
import { ApplicationStateService } from '../../application-state.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

    items: any;
    selectedItem: string;
    visible: boolean;

    constructor(
        private sessionService: SessionService,
        // private toastService: ToastService,
        private menuDataService: MenuDataService,
        private applicationStateService: ApplicationStateService,
        private router: Router) { }

    ngOnInit() {
        this.items = this.menuDataService.getMenuList();

        var that = this;
        this.menuDataService.toggleMenuBar.subscribe(function (data: any) {
            if (data && data != null) {
                that.visible = !that.visible;
            }
        });

        if (this.applicationStateService.getIsMobileResolution()) {
            this.visible = false;
        } else {
            this.visible = true;
        }

        var activeMenu = this.sessionService.getItem("active-menu");
        if (activeMenu) {
            this.selectedItem = activeMenu;
        } else {
            this.selectedItem = "Home";
        }
    }

    ngOnDestroy() {
        this.menuDataService.toggleMenuBar.observers.forEach(function (element) { element.complete(); });
    }

    // on menu click event
    onMenuClick(menu) {
        // if child are available then open child
        if (menu.Childs != undefined || menu.Childs != null) {
            this.toggleSubMenu(menu);
            return;
        }
        if (menu.RouterLink == undefined || menu.RouterLink == null || menu.RouterLink == "") {
            // this.toastService.addSingle("error", "", "404 Page not found.");
            return;
        }
        this.selectedItem = menu.Label;
        this.sessionService.setItem("active-menu", menu.Label);
        this.router.navigate([menu.RouterLink])
        // this.routeStateService.add(menu.Label, menu.RouterLink, null, true);
        // hide menu bar after menu click for mobile layout        
        setTimeout(() => {
            if (this.applicationStateService.getIsMobileResolution()) {
                this.visible = false;
            }
        }, 100);
    }

    // toggle sub menu on click
    toggleSubMenu(menu) {
        menu.IsChildVisible = !menu.IsChildVisible;
    }

}
