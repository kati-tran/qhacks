import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'paypal-component',
        loadChildren: () => import('../paypal-component/paypal-component.module').then(m => m.PaypalComponentPageModule)
      },
      /*
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },*/
      {
        path: '',
        redirectTo: '/tablinks/paypal-component',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/paypal-component',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
