import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpreventPage } from './sprevent.page';

const routes: Routes = [
  {
    path: '',
    component: SpreventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpreventPageRoutingModule {}
