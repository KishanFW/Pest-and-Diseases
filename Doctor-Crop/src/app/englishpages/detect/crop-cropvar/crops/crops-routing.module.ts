import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropsPage } from './crops.page';

const routes: Routes = [
  {
    path: '',
    component: CropsPage
  },
  {
    path: 'pests_diseases',
    loadChildren: () => import('./pests_diseases/pests_diseases.module').then( m => m.pests_diseasesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropsPageRoutingModule {}
