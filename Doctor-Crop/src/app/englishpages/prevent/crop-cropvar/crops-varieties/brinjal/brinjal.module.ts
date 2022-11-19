import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrinjalPageRoutingModule } from './brinjal-routing.module';

import { BrinjalPage } from './brinjal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrinjalPageRoutingModule
  ],
  declarations: [BrinjalPage]
})
export class BrinjalPageModule {}
