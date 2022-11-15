import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TpestDiseasesPageRoutingModule } from './tpest-diseases-routing.module';

import { TpestDiseasesPage } from './tpest-diseases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TpestDiseasesPageRoutingModule
  ],
  declarations: [TpestDiseasesPage]
})
export class TpestDiseasesPageModule {}
