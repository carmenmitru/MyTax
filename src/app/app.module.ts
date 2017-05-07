


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { routerConfig } from '../router.config';
import { firebaseConfig, authConfig } from './../firebase.config';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { Af} from './services/af.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LegislatieComponent } from './legislatie/legislatie.component';
import { PaymentsComponent } from './payments/payments.component';
import {CalendarModule} from "ap-angular2-fullcalendar";



import { CommonModule } from '@angular/common';
import { NotificariComponent } from './notificari/notificari.component';  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    CalendarComponent,
    LegislatieComponent,
    PaymentsComponent,
    NotificariComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    CalendarModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
    RouterModule.forRoot(routerConfig)
  ],
  providers: [Af],
  bootstrap: [AppComponent]
})
export class AppModule { }
