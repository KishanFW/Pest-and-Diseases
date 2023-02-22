import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropsPageRoutingModule } from './crops-routing.module';

import { CropsPage } from './crops.page';

import {  HttpClient } from '@angular/common/http'; //1
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'; 
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; //1

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
} //2

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropsPageRoutingModule,

    TranslateModule.forChild({ //3
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ], //3

  declarations: [CropsPage]
})
export class CropsPageModule {}
