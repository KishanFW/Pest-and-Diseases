import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PestPageRoutingModule } from './pest-routing.module';

import { PestPage } from './pest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PestPageRoutingModule
  ],
  declarations: [PestPage]
})
export class PestPageModule {}
