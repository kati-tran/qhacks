import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from '../post/post.component'
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommissionsPageRoutingModule } from './commissions-routing.module';

import { CommissionsPage } from './commissions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommissionsPageRoutingModule
  ],
  declarations: [CommissionsPage, PostComponent],
  exports: [PostComponent]
})
export class CommissionsPageModule {}
