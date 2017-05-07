import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Af } from './../services/af.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public af: Af,public router: Router) { }

  ngOnInit() {
     this.loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });
  }

  login(data) {
    console.log(data);
    const userDetails = data.value;
     this.af.loginWithEmail(userDetails).subscribe(us => {
        console.log(us);
        this.router.navigate(['/dashboard']);
     },err=>{
       console.log(err);
     });
  }

}
