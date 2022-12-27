import { PreventPestsDiseasesComponent } from './englishpages/prevent/crop-cropvar/crops/prevent-pests-diseases/prevent-pests-diseases.component';
import { SelectCropComponent } from './englishpages/detect/crop-cropvar/crops-varieties/select-crop/select-crop.component';
import { PestsComponent } from './englishpages/detect/crop-cropvar/crops/pests-diseases/pests/pests.component';
import { DiseasesComponent } from './englishpages/detect/crop-cropvar/crops/pests-diseases/diseases/diseases.component';
import { PestsDiseasesComponent } from './englishpages/detect/crop-cropvar/crops/pests-diseases/pests-diseases.component';
import { VarietiesComponent } from './englishpages/detect/crop-cropvar/crops-varieties/varieties/varieties.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [AppComponent,
                 PestsDiseasesComponent,
                 PestsComponent,
                 DiseasesComponent,
                 VarietiesComponent,
                 SelectCropComponent,
                 PreventPestsDiseasesComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
