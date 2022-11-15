import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TcropsPageRoutingModule } from './tcrops-routing.module';

import { TcropsPage } from './tcrops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TcropsPageRoutingModule
  ],
  declarations: [TcropsPage]
})
export class TcropsPageModule {}
