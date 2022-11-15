import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TcropCropvarPage } from './tcrop-cropvar.page';

const routes: Routes = [
  {
    path: '',
    component: TcropCropvarPage
  },
  {
    path: 'tcrops',
    loadChildren: () => import('./tcrops/tcrops.module').then( m => m.TcropsPageModule)
  },
  {
    path: 'tcrops-varieties',
    loadChildren: () => import('./tcrops-varieties/tcrops-varieties.module').then( m => m.TcropsVarietiesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TcropCropvarPageRoutingModule {}
