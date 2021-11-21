import { Component, OnInit } from '@angular/core';
import { PostserviceService, PostType } from './../postservice.service';
import { ModalController } from '@ionic/angular';
import {CreateDonationPage} from '../create-donation/create-donation.page';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.page.html',
  styleUrls: ['./donations.page.scss'],
})
export class DonationsPage implements OnInit {
  constructor(private postService: PostserviceService, public modalController: ModalController) { }

  ngOnInit() {
  }
  /*
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

  }*/


  async presentModal() {
    const modal = await this.modalController.create({
      component: CreateDonationPage,
      componentProps: {
        'type': '1'
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        //this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }
}
