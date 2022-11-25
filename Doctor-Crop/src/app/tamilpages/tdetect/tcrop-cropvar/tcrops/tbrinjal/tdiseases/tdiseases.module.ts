import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TdiseasesPageRoutingModule } from './tdiseases-routing.module';

import { TdiseasesPage } from './tdiseases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TdiseasesPageRoutingModule
  ],
  declarations: [TdiseasesPage]
})
export class TdiseasesPageModule {}
