import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrinjalPage } from './brinjal.page';

const routes: Routes = [
  {
    path: '',
    component: BrinjalPage
  },
  {
    path: 'pest',
    loadChildren: () => import('./pest/pest.module').then( m => m.PestPageModule)
  },
  {
    path: 'diseases',
    loadChildren: () => import('./diseases/diseases.module').then( m => m.DiseasesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrinjalPageRoutingModule {}
