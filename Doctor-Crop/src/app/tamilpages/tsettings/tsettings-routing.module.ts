import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsettingsPage } from './tsettings.page';

const routes: Routes = [
  {
    path: '',
    component: TsettingsPage
  },
  {
    path: 'tabout',
    loadChildren: () => import('./tabout/tabout.module').then( m => m.TaboutPageModule)
  },
  {
    path: 'tappsettings',
    loadChildren: () => import('./tappsettings/tappsettings.module').then( m => m.TappsettingsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsettingsPageRoutingModule {}
