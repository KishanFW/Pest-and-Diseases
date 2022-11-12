import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaboutPageRoutingModule } from './sabout-routing.module';

import { SaboutPage } from './sabout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaboutPageRoutingModule
  ],
  declarations: [SaboutPage]
})
export class SaboutPageModule {}
