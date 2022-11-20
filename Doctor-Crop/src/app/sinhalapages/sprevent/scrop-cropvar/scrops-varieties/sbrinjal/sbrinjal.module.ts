import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SbrinjalPageRoutingModule } from './sbrinjal-routing.module';

import { SbrinjalPage } from './sbrinjal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SbrinjalPageRoutingModule
  ],
  declarations: [SbrinjalPage]
})
export class SbrinjalPageModule {}
