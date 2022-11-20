import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TcropsVarietiesPage } from './tcrops-varieties.page';

const routes: Routes = [
  {
    path: '',
    component: TcropsVarietiesPage
  },
  {
    path: 'tbrinjal',
    loadChildren: () => import('./tbrinjal/tbrinjal.module').then( m => m.TbrinjalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TcropsVarietiesPageRoutingModule {}
