import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpreventPage } from './sprevent.page';

const routes: Routes = [
  {
    path: '',
    component: SpreventPage
  },  {
    path: 'scrop-cropvar',
    loadChildren: () => import('./scrop-cropvar/scrop-cropvar.module').then( m => m.ScropCropvarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpreventPageRoutingModule {}
