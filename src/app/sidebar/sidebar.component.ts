import { Af } from './../services/af.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user:any;
  constructor(public af:Af) { }

  ngOnInit() {
    this.af.getUserData().subscribe(data => {
        this.user = data;
        console.log(this.user);
    });
  }

}
