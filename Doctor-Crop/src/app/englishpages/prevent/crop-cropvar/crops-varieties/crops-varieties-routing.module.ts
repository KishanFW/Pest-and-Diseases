import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropsVarietiesPage } from './crops-varieties.page';

const routes: Routes = [
  {
    path: '',
    component: CropsVarietiesPage
  },
  {
    path: 'brinjal',
    loadChildren: () => import('./brinjal/brinjal.module').then( m => m.BrinjalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropsVarietiesPageRoutingModule {}
