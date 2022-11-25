import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SdiseasesPageRoutingModule } from './sdiseases-routing.module';

import { SdiseasesPage } from './sdiseases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SdiseasesPageRoutingModule
  ],
  declarations: [SdiseasesPage]
})
export class SdiseasesPageModule {}
