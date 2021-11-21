import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaypalComponentPageRoutingModule } from './paypal-component-routing.module';

import { PaypalComponentPage } from './paypal-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaypalComponentPageRoutingModule
  ],
  declarations: [PaypalComponentPage]
})
export class PaypalComponentPageModule {}
