import { VarietiesService } from 'src/app/services/varieties.service';
import { Variety } from './../crop-cropvar/crops-varieties/variety.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Crop } from '../crop-cropvar/crops/crop.model';
import { CropsService } from 'src/app/services/crops.service';
import { LoadingController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { SymptomsofpestService } from 'src/app/services/symptomsofpest.service';
import { DiseasesymptomsService } from './../../../services/diseasesymptoms.service';
import { DiseaseSymptom, PestSymptom } from '../crop-cropvar/crops/pests-diseases/pests-diseases.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  cropname: string = null;
  varietyname: string = null;
  pestsordiseases: string = null;
  symptomslist: any[] = [];

  crops$: Observable<Crop[]>;
  varieties$: Observable<Variety[]>;
  pestsymptoms$: Observable<PestSymptom[]>;
  diseasesymptoms$: Observable<DiseaseSymptom[]>;

  pesthidden: boolean = true;
  diseasehidden: boolean = true;
  pestupdownicon: String = "caret-down-outline";
  diseaseupdownicon: String = "caret-down-outline";

  constructor(
    private cropsService: CropsService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
    private varietiesService: VarietiesService,
    private pestSymptomService: SymptomsofpestService,
    private diseaseSymptomService: DiseasesymptomsService
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
    const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
    loading.present();

    this.varieties$ = this.varietiesService.getvarietiesofcrop(this.cropname).pipe(
      tap((varieties)=>{
        loading.dismiss();
        return varieties;
      })
    )

    this.varietyname = null;
    this.pestsordiseases = null;
  }

  async symptom(){
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

  showpestsymptom(){
    if(this.pesthidden === true){
      this.pesthidden = false;
      this.pestupdownicon = "caret-up-outline"
    }else if(this.pesthidden === false){
      this.pesthidden = true;
      this.pestupdownicon = "caret-down-outline"
    }
  }

  showdiseasesymptom(){
    if(this.diseasehidden === true){
      this.diseasehidden = false;
      this.diseaseupdownicon = "caret-up-outline"
    }else if(this.diseasehidden === false){
      this.diseasehidden = true;
      this.diseaseupdownicon = "caret-down-outline"
    }
  }

  resetall(){
    this.cropname = null;
    this.varietyname = null;
    this.pestsordiseases = null;
  }

  unselect(){
    this.symptomslist = [];
  }

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  test(){
    console.log(this.symptomslist);
  }

}
