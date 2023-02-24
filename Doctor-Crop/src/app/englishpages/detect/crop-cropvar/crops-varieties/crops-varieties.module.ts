import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropsVarietiesPageRoutingModule } from './crops-varieties-routing.module';

import { CropsVarietiesPage } from './crops-varieties.page';

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
    CropsVarietiesPageRoutingModule,

    TranslateModule.forChild({ //3
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ], //3
  
  declarations: [CropsVarietiesPage]
})
export class CropsVarietiesPageModule {}
