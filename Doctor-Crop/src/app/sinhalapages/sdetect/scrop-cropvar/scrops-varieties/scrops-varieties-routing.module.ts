import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScropsVarietiesPage } from './scrops-varieties.page';

const routes: Routes = [
  {
    path: '',
    component: ScropsVarietiesPage
  },
  {
    path: 'svarieties',
    loadChildren: () => import('./svarieties/svarieties.module').then( m => m.SvarietiesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScropsVarietiesPageRoutingModule {}
