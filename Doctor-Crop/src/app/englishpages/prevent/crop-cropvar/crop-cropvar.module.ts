import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropCropvarPageRoutingModule } from './crop-cropvar-routing.module';

import { CropCropvarPage } from './crop-cropvar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropCropvarPageRoutingModule
  ],
  declarations: [CropCropvarPage]
})
export class CropCropvarPageModule {}
