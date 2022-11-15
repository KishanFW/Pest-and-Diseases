import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpestPageRoutingModule } from './spest-routing.module';

import { SpestPage } from './spest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpestPageRoutingModule
  ],
  declarations: [SpestPage]
})
export class SpestPageModule {}
