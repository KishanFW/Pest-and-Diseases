import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VarietiesPageRoutingModule } from './varieties-routing.module';

import { VarietiesPage } from './varieties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VarietiesPageRoutingModule
  ],
  declarations: [VarietiesPage]
})
export class VarietiesPageModule {}
