import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SsettingsPage } from './ssettings.page';

const routes: Routes = [
  {
    path: '',
    component: SsettingsPage
  },
  {
    path: 'sabout',
    loadChildren: () => import('./sabout/sabout.module').then( m => m.SaboutPageModule)
  },
  {
    path: 'sappsettings',
    loadChildren: () => import('./sappsettings/sappsettings.module').then( m => m.SappsettingsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SsettingsPageRoutingModule {}
