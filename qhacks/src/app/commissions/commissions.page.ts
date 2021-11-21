import { Component, OnInit } from '@angular/core';
import { PostserviceService, PostType } from './../postservice.service';
import { ModalController } from '@ionic/angular';
import {CreateDonationPage} from '../create-donation/create-donation.page';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.page.html',
  styleUrls: ['./commissions.page.scss'],
})
export class CommissionsPage implements OnInit {

  constructor(private postService: PostserviceService, public modalController: ModalController) { }

  ngOnInit() {
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: CreateDonationPage,
      componentProps: {
        'type': '2'
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
