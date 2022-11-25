import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbrinjalPage } from './tbrinjal.page';

const routes: Routes = [
  {
    path: '',
    component: TbrinjalPage
  },
  {
    path: 'tpest',
    loadChildren: () => import('./tpest/tpest.module').then( m => m.TpestPageModule)
  },
  {
    path: 'tdiseases',
    loadChildren: () => import('./tdiseases/tdiseases.module').then( m => m.TdiseasesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbrinjalPageRoutingModule {}
