import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThomePage } from './thome.page';

const routes: Routes = [
  {
    path: '',
    component: ThomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThomePageRoutingModule {}
