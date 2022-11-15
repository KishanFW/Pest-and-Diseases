import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SbrinjalPage } from './sbrinjal.page';

const routes: Routes = [
  {
    path: '',
    component: SbrinjalPage
  },
  {
    path: 'spest-diseases',
    loadChildren: () => import('./spest-diseases/spest-diseases.module').then( m => m.SpestDiseasesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SbrinjalPageRoutingModule {}
