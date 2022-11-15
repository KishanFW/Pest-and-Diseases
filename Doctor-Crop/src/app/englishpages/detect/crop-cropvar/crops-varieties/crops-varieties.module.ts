import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropsVarietiesPageRoutingModule } from './crops-varieties-routing.module';

import { CropsVarietiesPage } from './crops-varieties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropsVarietiesPageRoutingModule
  ],
  declarations: [CropsVarietiesPage]
})
export class CropsVarietiesPageModule {}
