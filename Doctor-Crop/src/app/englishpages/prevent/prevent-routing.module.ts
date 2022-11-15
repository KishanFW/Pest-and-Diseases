import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreventPage } from './prevent.page';

const routes: Routes = [
  {
    path: '',
    component: PreventPage
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
export class PreventPageRoutingModule {}
