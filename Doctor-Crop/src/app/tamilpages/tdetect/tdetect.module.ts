import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TdetectPageRoutingModule } from './tdetect-routing.module';

import { TdetectPage } from './tdetect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TdetectPageRoutingModule
  ],
  declarations: [TdetectPage]
})
export class TdetectPageModule {}
