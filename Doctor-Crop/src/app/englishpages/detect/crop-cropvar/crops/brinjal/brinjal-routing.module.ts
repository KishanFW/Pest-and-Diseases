import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrinjalPage } from './brinjal.page';

const routes: Routes = [
  {
    path: '',
    component: BrinjalPage
  },
  {
    path: 'pest-diseases',
    loadChildren: () => import('./pest-diseases/pest-diseases.module').then( m => m.PestDiseasesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrinjalPageRoutingModule {}
