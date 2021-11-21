import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostserviceService, PostType } from './../postservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  constructor(private postService: PostserviceService) { }

  ngOnInit() {
  }

  registerUser() {
    let postData = {
      "firstname": this.firstname,
      "username": this.firstname + this.lastname,
      "lastname": this.lastname,
      "email": this.email,
      "password": this.password
    }
    this.postService.registerUser(postData);

  }

}
