import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsettingsPageRoutingModule } from './tsettings-routing.module';

import { TsettingsPage } from './tsettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsettingsPageRoutingModule
  ],
  declarations: [TsettingsPage]
})
export class TsettingsPageModule {}
