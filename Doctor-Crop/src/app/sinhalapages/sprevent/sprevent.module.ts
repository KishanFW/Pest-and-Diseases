import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpreventPageRoutingModule } from './sprevent-routing.module';

import { SpreventPage } from './sprevent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpreventPageRoutingModule
  ],
  declarations: [SpreventPage]
})
export class SpreventPageModule {}
