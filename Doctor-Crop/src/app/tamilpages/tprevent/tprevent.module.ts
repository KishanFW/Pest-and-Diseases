import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TpreventPageRoutingModule } from './tprevent-routing.module';

import { TpreventPage } from './tprevent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TpreventPageRoutingModule
  ],
  declarations: [TpreventPage]
})
export class TpreventPageModule {}
