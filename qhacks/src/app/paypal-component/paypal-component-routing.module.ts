import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaypalComponentPage } from './paypal-component.page';

const routes: Routes = [
  {
    path: '',
    component: PaypalComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaypalComponentPageRoutingModule {}
