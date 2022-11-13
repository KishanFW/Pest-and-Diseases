import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SreadPageRoutingModule } from './sread-routing.module';

import { SreadPage } from './sread.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SreadPageRoutingModule
  ],
  declarations: [SreadPage]
})
export class SreadPageModule {}
