import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetectPage } from './detect.page';

const routes: Routes = [
  {
    path: '',
    component: DetectPage
  },
  {
    path: 'crop-cropvar',
    loadChildren: () => import('./crop-cropvar/crop-cropvar.module').then( m => m.CropCropvarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetectPageRoutingModule {}
