import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropsPage } from './crops.page';

const routes: Routes = [
  {
    path: '',
    component: CropsPage
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
export class CropsPageRoutingModule {}
