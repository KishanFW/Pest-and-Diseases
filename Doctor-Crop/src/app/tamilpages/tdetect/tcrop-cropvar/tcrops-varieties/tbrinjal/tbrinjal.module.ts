import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TbrinjalPageRoutingModule } from './tbrinjal-routing.module';

import { TbrinjalPage } from './tbrinjal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TbrinjalPageRoutingModule
  ],
  declarations: [TbrinjalPage]
})
export class TbrinjalPageModule {}
