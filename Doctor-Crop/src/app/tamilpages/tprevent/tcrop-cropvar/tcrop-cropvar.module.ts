import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TcropCropvarPageRoutingModule } from './tcrop-cropvar-routing.module';

import { TcropCropvarPage } from './tcrop-cropvar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TcropCropvarPageRoutingModule
  ],
  declarations: [TcropCropvarPage]
})
export class TcropCropvarPageModule {}
