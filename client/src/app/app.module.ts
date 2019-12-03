import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestPipe } from "./pipe/test.pipe";
import { HomeComponent } from "./component/home/home.component";
import { HeaderComponent } from "./shared/layout/header/header.component";
import { FooterComponent } from "./shared/layout/footer/footer.component";
import { MenubarModule } from "primeng/menubar";
import { MenuModule } from "primeng/menu";
import { ButtonModule } from "primeng/button";
import { AuthService } from "./shared/auth.service";
import { MessageService } from "primeng/api";
import { PanelMenuModule } from "primeng/panelmenu";
import { ListboxModule } from "primeng/listbox";
import { CardModule } from "primeng/card";
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ToolbarModule} from 'primeng/toolbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './guard/auth.interceptor';
import { ChatBotComponent } from './component/chat-bot/chat-bot.component';
import { ChatService } from './shared/chat.service';
import { FormsModule } from '@angular/forms';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {InputTextModule} from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { ErrorInterceptor } from './guard/error.interceptor';
import { ToastModule } from 'primeng/toast';
import { PushService } from './shared/push.service';
import { OrderByPipe } from './pipe/order-by.pipe';
import { LayoutComponent } from './shared/layout/layout.component';
import { MenuComponent } from './shared/layout/menu/menu.component';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    TestPipe,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ChatBotComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    PanelMenuModule,
    MenuModule,
    ListboxModule,
    CardModule,
    OverlayPanelModule,
    ToolbarModule,
    ScrollPanelModule,
    InputTextModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    ToastModule,
    SidebarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthService, MessageService,ChatService,PushService],
  bootstrap: [AppComponent]
})
export class AppModule {}
