import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }


  login(){
    this.route.navigate(['home']);
  }

  next(){
    this.route.navigate(['login']);
  }

}
