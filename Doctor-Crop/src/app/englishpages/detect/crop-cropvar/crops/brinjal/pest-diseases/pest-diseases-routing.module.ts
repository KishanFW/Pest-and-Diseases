import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PestDiseasesPage } from './pest-diseases.page';

const routes: Routes = [
  {
    path: '',
    component: PestDiseasesPage
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
export class PestDiseasesPageRoutingModule {}
