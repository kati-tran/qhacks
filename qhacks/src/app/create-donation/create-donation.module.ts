import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDonationPageRoutingModule } from './create-donation-routing.module';

import { CreateDonationPage } from './create-donation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDonationPageRoutingModule
  ],
  declarations: [CreateDonationPage]
})
export class CreateDonationPageModule {}
