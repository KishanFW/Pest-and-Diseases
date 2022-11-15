import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbrinjalPage } from './tbrinjal.page';

const routes: Routes = [
  {
    path: '',
    component: TbrinjalPage
  },
  {
    path: 'tpest-diseases',
    loadChildren: () => import('./tpest-diseases/tpest-diseases.module').then( m => m.TpestDiseasesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbrinjalPageRoutingModule {}
