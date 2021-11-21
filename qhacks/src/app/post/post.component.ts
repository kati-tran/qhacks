import { Component, OnInit, Input } from '@angular/core';
import { PostserviceService, PostType } from './../postservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  results: any[];
  searchTerm: string = '';
  @Input() type: PostType

  constructor(private postService: PostserviceService) { }

  ngOnInit() { this.getPostsChanged() }

  getPostsChanged() {
    // Call our service function which returns an Observable
    console.log(this.type);
    this.postService.getPosts(this.type).subscribe((answer) => {
      console.log(answer)
      this.results = answer;
      //console.log(this.results); // here you get the json 
    }, error => {
      console.log(error)
    });
    //console.log(this.results)
  }

}
