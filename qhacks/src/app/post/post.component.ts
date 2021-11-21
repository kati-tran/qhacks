import { Component, OnInit } from '@angular/core';
import { PostserviceService, PostType } from './../postservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: PostType = PostType.all;

  constructor(private postService: PostserviceService) { }

  ngOnInit() {this.getPostsChanged()}

  getPostsChanged() {
    // Call our service function which returns an Observable
    this.results = this.postService.getPosts(this.type);
    console.log(this.results)
  }

}
