import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScropsVarietiesPage } from './scrops-varieties.page';

const routes: Routes = [
  {
    path: '',
    component: ScropsVarietiesPage
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
export class ScropsVarietiesPageRoutingModule {}
