import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpestDiseasesPageRoutingModule } from './spest-diseases-routing.module';

import { SpestDiseasesPage } from './spest-diseases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpestDiseasesPageRoutingModule
  ],
  declarations: [SpestDiseasesPage]
})
export class SpestDiseasesPageModule {}
