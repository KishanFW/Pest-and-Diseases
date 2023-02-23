import { PPestDetailsComponent } from './englishpages/prevent/crop-cropvar/crops/prevent-pests-diseases/p-pests/p-pest-details/p-pest-details.component';
import { PPestsComponent } from './englishpages/prevent/crop-cropvar/crops/prevent-pests-diseases/p-pests/p-pests.component';
import { PDiseaseDetailsComponent } from './englishpages/prevent/crop-cropvar/crops/prevent-pests-diseases/p-diseases/p-disease-details/p-disease-details.component';
import { PDiseasesComponent } from './englishpages/prevent/crop-cropvar/crops/prevent-pests-diseases/p-diseases/p-diseases.component';
import { VPestsComponent } from './englishpages/detect/crop-cropvar/crops-varieties/varieties/v-pests-diseases/v-pests/v-pests.component';
import { DetectresultsComponent } from './englishpages/detect/questions/detectresults/detectresults.component';
import { DiseasedetailsComponent } from './englishpages/detect/crop-cropvar/crops/pests-diseases/diseases/diseasedetails/diseasedetails.component';
import { PestdetailsComponent } from './englishpages/detect/crop-cropvar/crops/pests-diseases/pests/pestdetails/pestdetails.component';

import { VPestsDiseasesComponent } from './englishpages/detect/crop-cropvar/crops-varieties/varieties/v-pests-diseases/v-pests-diseases.component';
import { PreventSelectCropComponent } from './englishpages/prevent/crop-cropvar/crops-varieties/prevent-select-crop/prevent-select-crop.component';
import { PreventVarietiesComponent } from './englishpages/prevent/crop-cropvar/crops-varieties/prevent-varieties/prevent-varieties.component';
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
import { PVPestsDiseasesComponent } from './englishpages/prevent/crop-cropvar/crops-varieties/prevent-varieties/p-v-pests-diseases/p-v-pests-diseases.component';
import { VDiseasesComponent } from './englishpages/detect/crop-cropvar/crops-varieties/varieties/v-pests-diseases/v-diseases/v-diseases.component';

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
                 PreventPestsDiseasesComponent,
                 PreventVarietiesComponent,
                 PreventSelectCropComponent,
                 VPestsDiseasesComponent,
                 PVPestsDiseasesComponent,
                 PestdetailsComponent,
                 DiseasedetailsComponent,
                 DetectresultsComponent,
                 VPestsComponent,
                 VDiseasesComponent,
                 PDiseasesComponent,
                 PDiseaseDetailsComponent,
                 PPestsComponent,
                 PPestDetailsComponent],
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
