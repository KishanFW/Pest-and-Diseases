import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScropCropvarPageRoutingModule } from './scrop-cropvar-routing.module';

import { ScropCropvarPage } from './scrop-cropvar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScropCropvarPageRoutingModule
  ],
  declarations: [ScropCropvarPage]
})
export class ScropCropvarPageModule {}
