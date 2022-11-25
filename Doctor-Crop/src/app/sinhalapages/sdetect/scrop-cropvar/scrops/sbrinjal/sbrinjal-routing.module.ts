import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SbrinjalPage } from './sbrinjal.page';

const routes: Routes = [
  {
    path: '',
    component: SbrinjalPage
  },
  {
    path: 'spest',
    loadChildren: () => import('./spest/spest.module').then( m => m.SpestPageModule)
  },
  {
    path: 'sdiseases',
    loadChildren: () => import('./sdiseases/sdiseases.module').then( m => m.SdiseasesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SbrinjalPageRoutingModule {}
