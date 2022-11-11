import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SdetectPageRoutingModule } from './sdetect-routing.module';

import { SdetectPage } from './sdetect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SdetectPageRoutingModule
  ],
  declarations: [SdetectPage]
})
export class SdetectPageModule {}
