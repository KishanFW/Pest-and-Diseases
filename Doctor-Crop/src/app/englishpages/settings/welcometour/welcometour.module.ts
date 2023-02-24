import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcometourPageRoutingModule } from './welcometour-routing.module';

import { WelcometourPage } from './welcometour.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcometourPageRoutingModule

  ],
  declarations: [WelcometourPage]
})
export class WelcometourPageModule {}
