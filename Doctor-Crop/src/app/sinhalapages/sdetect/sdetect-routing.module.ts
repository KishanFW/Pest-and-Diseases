import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SdetectPage } from './sdetect.page';

const routes: Routes = [
  {
    path: '',
    component: SdetectPage
  },  {
    path: 'scrop-cropvar',
    loadChildren: () => import('./scrop-cropvar/scrop-cropvar.module').then( m => m.ScropCropvarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SdetectPageRoutingModule {}
