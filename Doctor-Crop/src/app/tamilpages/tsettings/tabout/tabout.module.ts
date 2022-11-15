import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaboutPageRoutingModule } from './tabout-routing.module';

import { TaboutPage } from './tabout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaboutPageRoutingModule
  ],
  declarations: [TaboutPage]
})
export class TaboutPageModule {}
