import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropCropvarPage } from './crop-cropvar.page';

const routes: Routes = [
  {
    path: '',
    component: CropCropvarPage
  },
  {
    path: 'crops',
    loadChildren: () => import('./crops/crops.module').then( m => m.CropsPageModule)
  },
  {
    path: 'crops-varieties',
    loadChildren: () => import('./crops-varieties/crops-varieties.module').then( m => m.CropsVarietiesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropCropvarPageRoutingModule {}
