import { Component, OnInit, Input  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostserviceService, PostType } from './../postservice.service';

@Component({
  selector: 'app-create-donation',
  templateUrl: './create-donation.page.html',
  styleUrls: ['./create-donation.page.scss'],
})
export class CreateDonationPage implements OnInit {

  description: string;
  payment: string;
  donationgoal: string;
  tags: string;
  @Input() type: string

  constructor(private postService: PostserviceService, public modalController: ModalController) { }

  ngOnInit() {
  }

  
  createPost() {
    let postData = {
      "title": "title",
      "description": this.description,
      "pay_email": this.payment,
      "user_id": 5,
      "published": false,
      "type": this.type
    }
    this.postService.createPost(postData);
    this.dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    const closeModal: string = "Modal Closed";
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
