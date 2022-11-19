import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TcropsVarietiesPage } from './tcrops-varieties.page';

const routes: Routes = [
  {
    path: '',
    component: TcropsVarietiesPage
  },
  {
    path: 'tvarieties',
    loadChildren: () => import('./tvarieties/tvarieties.module').then( m => m.TvarietiesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TcropsVarietiesPageRoutingModule {}
