import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {PostComponent} from '../post/post.component'
import { DonationsPageRoutingModule } from './donations-routing.module';

import { DonationsPage } from './donations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonationsPageRoutingModule
  ],
  declarations: [DonationsPage, PostComponent],
  exports: [PostComponent]
})
export class DonationsPageModule {
  
}
