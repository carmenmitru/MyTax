import { AngularFire } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(public af: AngularFire) { }

  ngOnInit() {
  }

  pay(){
    this.af.database.object("users/0GG4vvxG0WgcfW2xnrJ55B52xhj2/taxe/3").update({
      "payment":1
    })
  }

}
