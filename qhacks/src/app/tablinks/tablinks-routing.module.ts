import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      /*
      {
        path: 'paypal-component',
        loadChildren: () => import('../paypal-component/paypal-component.module').then(m => m.PaypalComponentPageModule)
      },*/
      {
        path: 'donations',
        loadChildren: () => import('../donations/donations.module').then( m => m.DonationsPageModule)
      },
      {
        path: 'commissions',
        loadChildren: () => import('../commissions/commissions.module').then( m => m.CommissionsPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/donations',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/donations',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
