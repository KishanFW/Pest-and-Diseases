import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SsettingsPageRoutingModule } from './ssettings-routing.module';

import { SsettingsPage } from './ssettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SsettingsPageRoutingModule
  ],
  declarations: [SsettingsPage]
})
export class SsettingsPageModule {}
