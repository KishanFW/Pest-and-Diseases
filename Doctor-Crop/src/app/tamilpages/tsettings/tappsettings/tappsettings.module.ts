import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TappsettingsPageRoutingModule } from './tappsettings-routing.module';

import { TappsettingsPage } from './tappsettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TappsettingsPageRoutingModule
  ],
  declarations: [TappsettingsPage]
})
export class TappsettingsPageModule {}
