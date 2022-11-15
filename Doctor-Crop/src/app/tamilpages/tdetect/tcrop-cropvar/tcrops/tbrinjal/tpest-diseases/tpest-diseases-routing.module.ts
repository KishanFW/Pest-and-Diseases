import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TpestDiseasesPage } from './tpest-diseases.page';

const routes: Routes = [
  {
    path: '',
    component: TpestDiseasesPage
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
export class TpestDiseasesPageRoutingModule {}
