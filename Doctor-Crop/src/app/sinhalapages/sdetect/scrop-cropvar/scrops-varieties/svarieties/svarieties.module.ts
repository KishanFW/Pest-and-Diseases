import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SvarietiesPageRoutingModule } from './svarieties-routing.module';

import { SvarietiesPage } from './svarieties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SvarietiesPageRoutingModule
  ],
  declarations: [SvarietiesPage]
})
export class SvarietiesPageModule {}
