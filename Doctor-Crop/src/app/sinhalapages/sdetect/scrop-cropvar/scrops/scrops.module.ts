import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScropsPageRoutingModule } from './scrops-routing.module';

import { ScropsPage } from './scrops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScropsPageRoutingModule
  ],
  declarations: [ScropsPage]
})
export class ScropsPageModule {}
