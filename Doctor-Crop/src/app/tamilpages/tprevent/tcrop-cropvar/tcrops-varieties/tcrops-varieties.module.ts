import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TcropsVarietiesPageRoutingModule } from './tcrops-varieties-routing.module';

import { TcropsVarietiesPage } from './tcrops-varieties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TcropsVarietiesPageRoutingModule
  ],
  declarations: [TcropsVarietiesPage]
})
export class TcropsVarietiesPageModule {}
