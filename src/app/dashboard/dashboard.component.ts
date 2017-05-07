import { AngularFire } from 'angularfire2';
import { Af } from './../services/af.service';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user :any;
  taxes :any;
  constructor(public af:Af,private angularFire:AngularFire) { }

  ngOnInit() {
    this.af.getUserData().subscribe(data =>{
        this.user =data;
        this.taxes = this.user['taxe'];
    });
    
  }

}
