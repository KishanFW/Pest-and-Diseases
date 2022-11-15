import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TpreventPage } from './tprevent.page';

const routes: Routes = [
  {
    path: '',
    component: TpreventPage
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
export class TpreventPageRoutingModule {}
