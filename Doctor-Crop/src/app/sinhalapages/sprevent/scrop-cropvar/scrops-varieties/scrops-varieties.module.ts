import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScropsVarietiesPageRoutingModule } from './scrops-varieties-routing.module';

import { ScropsVarietiesPage } from './scrops-varieties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScropsVarietiesPageRoutingModule
  ],
  declarations: [ScropsVarietiesPage]
})
export class ScropsVarietiesPageModule {}
