import { Af } from './../services/af.service';
import { AngularFire } from 'angularfire2';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificari',
  templateUrl: './notificari.component.html',
  styleUrls: ['./notificari.component.css']
})
export class NotificariComponent implements OnInit {
  notifications;
  constructor(public af:Af) { }

  ngOnInit() {
     this.af.getUserData().subscribe(data =>{ 
        this.notifications = data['notificati'];
    });
  }

}
