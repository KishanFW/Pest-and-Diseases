import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TpestPageRoutingModule } from './tpest-routing.module';

import { TpestPage } from './tpest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TpestPageRoutingModule
  ],
  declarations: [TpestPage]
})
export class TpestPageModule {}
