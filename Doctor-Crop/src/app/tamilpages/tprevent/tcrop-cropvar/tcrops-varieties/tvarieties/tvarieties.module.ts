import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvarietiesPageRoutingModule } from './tvarieties-routing.module';

import { TvarietiesPage } from './tvarieties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvarietiesPageRoutingModule
  ],
  declarations: [TvarietiesPage]
})
export class TvarietiesPageModule {}
