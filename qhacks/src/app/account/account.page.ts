import { Component, OnInit } from '@angular/core';
import { PostserviceService, PostType } from './../postservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  results: any[];
  searchTerm: string = '';
  type: string
  userID: string = "5"
  constructor(private postService: PostserviceService) { }

  ngOnInit() {this.getUserPosts()
  }
  
  getUserPosts() {
    // Call our service function which returns an Observable
    console.log(this.type);
    this.postService.getUserPosts(this.userID).subscribe((answer) => {
      console.log(answer)
      this.results = answer;
      //console.log(this.results); // here you get the json 
    }, error => {
      console.log(error)
    });
    //console.log(this.results)
  }

}
