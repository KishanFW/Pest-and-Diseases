import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { pests_diseasesPageRoutingModule } from './pests_diseases-routing.module';

import { pests_diseasesPage } from './pests_diseases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    pests_diseasesPageRoutingModule
  ],
  declarations: [pests_diseasesPage]
})
export class pests_diseasesPageModule {}
