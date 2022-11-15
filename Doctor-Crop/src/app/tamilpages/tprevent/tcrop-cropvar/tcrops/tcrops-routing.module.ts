import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TcropsPage } from './tcrops.page';

const routes: Routes = [
  {
    path: '',
    component: TcropsPage
  },
  {
    path: 'tbrinjal',
    loadChildren: () => import('./tbrinjal/tbrinjal.module').then( m => m.TbrinjalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TcropsPageRoutingModule {}
