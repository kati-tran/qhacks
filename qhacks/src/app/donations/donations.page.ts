import { Component, OnInit } from '@angular/core';
import { PostserviceService, PostType } from './../postservice.service';
@Component({
  selector: 'app-donations',
  templateUrl: './donations.page.html',
  styleUrls: ['./donations.page.scss'],
})
export class DonationsPage implements OnInit {
  constructor(private postService: PostserviceService) { }

  ngOnInit() {
  }
  
  createPost() {
    let postData = {
      "title": "meehoymeenoy",
      "description": "imma description",
      "pay_email": "email@email.com",
      "user_id": 1,
      "published": false,
      "type": 1
    }
    this.postService.createPost(postData);

  }
}
