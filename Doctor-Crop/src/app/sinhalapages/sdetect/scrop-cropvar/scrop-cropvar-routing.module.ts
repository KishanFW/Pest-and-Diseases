import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScropCropvarPage } from './scrop-cropvar.page';

const routes: Routes = [
  {
    path: '',
    component: ScropCropvarPage
  },
  {
    path: 'scrops',
    loadChildren: () => import('./scrops/scrops.module').then( m => m.ScropsPageModule)
  },
  {
    path: 'scrops-varieties',
    loadChildren: () => import('./scrops-varieties/scrops-varieties.module').then( m => m.ScropsVarietiesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScropCropvarPageRoutingModule {}
