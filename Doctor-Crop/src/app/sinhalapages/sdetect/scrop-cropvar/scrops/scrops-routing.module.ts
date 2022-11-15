import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScropsPage } from './scrops.page';

const routes: Routes = [
  {
    path: '',
    component: ScropsPage
  },
  {
    path: 'sbrinjal',
    loadChildren: () => import('./sbrinjal/sbrinjal.module').then( m => m.SbrinjalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScropsPageRoutingModule {}
