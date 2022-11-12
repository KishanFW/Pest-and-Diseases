import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SreadPage } from './sread.page';

const routes: Routes = [
  {
    path: '',
    component: SreadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SreadPageRoutingModule {}
