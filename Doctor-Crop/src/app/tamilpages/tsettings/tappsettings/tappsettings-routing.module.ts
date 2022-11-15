import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TappsettingsPage } from './tappsettings.page';

const routes: Routes = [
  {
    path: '',
    component: TappsettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TappsettingsPageRoutingModule {}
