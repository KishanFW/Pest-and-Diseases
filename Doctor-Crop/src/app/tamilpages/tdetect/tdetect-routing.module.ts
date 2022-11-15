import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TdetectPage } from './tdetect.page';

const routes: Routes = [
  {
    path: '',
    component: TdetectPage
  },
  {
    path: 'tcrop-cropvar',
    loadChildren: () => import('./tcrop-cropvar/tcrop-cropvar.module').then( m => m.TcropCropvarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TdetectPageRoutingModule {}
