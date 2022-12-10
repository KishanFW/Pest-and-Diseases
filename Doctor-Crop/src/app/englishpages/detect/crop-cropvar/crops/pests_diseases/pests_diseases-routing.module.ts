import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { pests_diseasesPage } from './pests_diseases.page';

const routes: Routes = [
  {
    path: '',
    component: pests_diseasesPage
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
export class pests_diseasesPageRoutingModule {}
