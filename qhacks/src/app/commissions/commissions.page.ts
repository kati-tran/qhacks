import { Component, OnInit } from '@angular/core';
import { PostserviceService, PostType } from './../postservice.service';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.page.html',
  styleUrls: ['./commissions.page.scss'],
})
export class CommissionsPage implements OnInit {

  constructor(private postService: PostserviceService) { }

  ngOnInit() {
  }

}
