import { VarietiesService } from 'src/app/services/varieties.service';
import { Variety } from './../crop-cropvar/crops-varieties/variety.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Crop } from '../crop-cropvar/crops/crop.model';
import { CropsService } from 'src/app/services/crops.service';
import { SymptomcatagoriesService } from 'src/app/services/symptomcatagories.service';
import { LoadingController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { SymptomsofpestService } from 'src/app/services/symptomsofpest.service';
import { DiseasesymptomsService } from './../../../services/diseasesymptoms.service';
import { DiseaseSymptom, PestSymptom, SymptomCatagory } from '../crop-cropvar/crops/pests-diseases/pests-diseases.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  cropname: string = undefined;
  varietyname: string = undefined;
  pestsordiseases: string = undefined;
  symptomslist: any[] = [];
  catagories: any[] = [];

  crops$: Observable<Crop[]>;
  varieties$: Observable<Variety[]>;
  pestsymptoms$: Observable<PestSymptom[]>;
  diseasesymptoms$: Observable<DiseaseSymptom[]>;
  catagories$: Observable<SymptomCatagory[]>;

  constructor(
    private cropsService: CropsService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
    private varietiesService: VarietiesService,
    private pestSymptomService: SymptomsofpestService,
    private diseaseSymptomService: DiseasesymptomsService,
    private symptomcatagoriesService: SymptomcatagoriesService
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
    loading.present();

    this.crops$ = this.cropsService.getCrops().pipe(
      tap((crops) => {
        loading.dismiss();
        return crops;
      })
    );
  }

  async variety(){
    if(this.cropname != undefined){
      const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
      loading.present();

      this.varieties$ = this.varietiesService.getvarietiesofcrop(this.cropname).pipe(
        tap((varieties)=>{
          loading.dismiss();
          return varieties;
        })
      )
    }
    this.varietyname = undefined;
    this.pestsordiseases = undefined;
  }

  async symptom(){
    if(this.pestsordiseases != undefined){
      const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
      loading.present();

      if(this.pestsordiseases == "pests"){
        this.pestsymptoms$ = this.pestSymptomService.getpestsymptomsofcrop(this.cropname).pipe(
          tap((pestsymptoms)=>{
            loading.dismiss();
            return pestsymptoms;
          })
        );
      }
      else if(this.pestsordiseases == "diseases"){
        this.diseasesymptoms$ = this.diseaseSymptomService.getdiseasesymptomsofcrop(this.cropname).pipe(
          tap((diseasesymptoms)=>{
            loading.dismiss();
            return diseasesymptoms;
          })
        );
      }
      else if(this.pestsordiseases == "not identified"){
        loading.dismiss();
      }
    }
  }

  async catagory(){
    const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
    loading.present();

    this.catagories$ = this.symptomcatagoriesService.getCatagories().pipe(
      tap((catagories)=>{
        loading.dismiss();
        return catagories;
      })
    )
  }

  async alertcropselect(){
    if(this.cropname == null){
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'No crop is selected!',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  async alertpestdiseaseselect(){
    if(this.pestsordiseases == null){
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'Choose Pests or Diseases',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  resetall(){
    this.cropname = null;
    this.varietyname = null;
    this.pestsordiseases = null;
    this.symptomslist = [];
    this.catagories = [];
  }

  unselect(){
    this.symptomslist = [];
    this.catagories = [];
  }

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  test(){
    console.log(this.catagories);
  }

}
