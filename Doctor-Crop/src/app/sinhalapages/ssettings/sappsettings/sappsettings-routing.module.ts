import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SappsettingsPage } from './sappsettings.page';

const routes: Routes = [
  {
    path: '',
    component: SappsettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SappsettingsPageRoutingModule {}
