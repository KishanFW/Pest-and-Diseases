import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThomePageRoutingModule } from './thome-routing.module';

import { ThomePage } from './thome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThomePageRoutingModule
  ],
  declarations: [ThomePage]
})
export class ThomePageModule {}
