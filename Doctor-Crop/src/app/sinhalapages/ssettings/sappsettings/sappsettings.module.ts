import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SappsettingsPageRoutingModule } from './sappsettings-routing.module';

import { SappsettingsPage } from './sappsettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SappsettingsPageRoutingModule
  ],
  declarations: [SappsettingsPage]
})
export class SappsettingsPageModule {}
