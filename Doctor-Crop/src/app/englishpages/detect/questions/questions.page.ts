import { VarietiesService } from 'src/app/services/varieties.service';
import { Variety } from './../crop-cropvar/crops-varieties/variety.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Crop } from '../crop-cropvar/crops/crop.model';
import { CropsService } from 'src/app/services/crops.service';
import { SymptomcatagoriesService } from 'src/app/services/symptomcatagories.service';
import { SymptomsService } from 'src/app/services/symptoms.service';
import { VaiablesService } from 'src/app/services/vaiables.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { SymptomsofpestService } from 'src/app/services/symptomsofpest.service';
import { DiseasesymptomsService } from './../../../services/diseasesymptoms.service';
import { DiseaseSymptom, PestSymptom, SymptomCatagory, Symptom } from '../crop-cropvar/crops/pests-diseases/pests-diseases.model';
import { DetectresultsComponent } from './detectresults/detectresults.component';
import { ModalService } from 'src/app/services/modal.service';
import { NewsymptomService } from 'src/app/services/newsymptom.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  cropname: string = undefined;
  varietyname: string = "undefined";
  pestsordiseases: string = undefined;
  symptomslist: any[] = null;
  catagories: any[] = null;

  crops$: Observable<Crop[]>;
  varieties$: Observable<Variety[]>;
  pestsymptoms$: Observable<PestSymptom[]>;
  diseasesymptoms$: Observable<DiseaseSymptom[]>;
  symptoms$: Observable<Symptom[]>;
  catagories$: Observable<SymptomCatagory[]>;

  constructor(
    private cropsService: CropsService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
    private varietiesService: VarietiesService,
    private pestSymptomService: SymptomsofpestService,
    private diseaseSymptomService: DiseasesymptomsService,
    private symptomcatagoriesService: SymptomcatagoriesService,
    private symptomService: SymptomsService,
    private variableService: VaiablesService,
    private modalCtrl: ModalController,
    private modalService: ModalService,
    private newsymptomService: NewsymptomService
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
    this.varietyname = "undefined";
    this.pestsordiseases = undefined;
  }

  async symptom(){
    if(this.catagories.length !== 0){
      const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
      loading.present();

    if(this.varietyname == "undefined" || this.varietyname == "not identified"){

      if(this.pestsordiseases == "pests"){
        this.pestsymptoms$ = this.pestSymptomService.getpestsymptomsofcrop(this.cropname,this.catagories).pipe(
          tap((pestsymptoms)=>{
            loading.dismiss();
            return pestsymptoms.splice(0,1);
          })
        );

      }
      else if(this.pestsordiseases == "diseases"){
        this.diseasesymptoms$ = this.diseaseSymptomService.getdiseasesymptomsofcrop(this.cropname,this.catagories).pipe(
          tap((diseasesymptoms)=>{
            loading.dismiss();
            return diseasesymptoms.splice(0,1);
          })
        );
      }
      else if(this.pestsordiseases == "not identified"){
        this.symptoms$ = this.symptomService.getsymptomsofcrop(this.cropname,this.catagories).pipe(
          tap((symptoms)=>{
            loading.dismiss();
            return symptoms.splice(0,1);
          })
        );
      }
    }else{
      if(this.pestsordiseases == "pests"){
        this.pestsymptoms$ = this.pestSymptomService.getpestsymptomsofvariety(this.varietyname,this.catagories).pipe(
          tap((pestsymptoms)=>{
            loading.dismiss();
            return pestsymptoms.splice(0,1);
          })
        );

      }
      else if(this.pestsordiseases == "diseases"){
        this.diseasesymptoms$ = this.diseaseSymptomService.getdiseasesymptomsofvariety(this.varietyname,this.catagories).pipe(
          tap((diseasesymptoms)=>{
            loading.dismiss();
            return diseasesymptoms.splice(0,1);
          })
        );
      }
      else if(this.pestsordiseases == "not identified"){
        this.symptoms$ = this.symptomService.getsymptomsofvariety(this.varietyname,this.catagories).pipe(
          tap((symptoms)=>{
            loading.dismiss();
            return symptoms.splice(0,1);
          })
        );
      }
    }

    }
    else{
      this.catagories = null;
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

  async alertcatagorisselect(){
    if(this.catagories == null){
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'Choose Catagory(s)',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  resetall(){
    this.cropname = undefined;
    this.varietyname = "undefined";
    this.pestsordiseases = undefined;
    this.symptomslist = null;
    this.catagories = null
  }

  unselect(){
    this.symptomslist = null;
    this.catagories = null;
  }

  unselectforvariety(){
    this.pestsordiseases = undefined;
    this.symptomslist = null;
    this.catagories = null;
  }

  unselectforcat(){
    this.symptomslist = null;
  }

  variables(){
      this.variableService.changeData(this.pestsordiseases,this.symptomslist);
  }

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  async openResultsModal(){

    if(this.symptomslist != null){
      const modal = await this.modalCtrl.create({
        component: DetectresultsComponent,
      });
      this.modalService.addModal(modal);
      modal.present();
    }else{
        this.alertdetect();
    }
  }

  async alertdetect(){
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'Choose Symptom(s)',
        buttons: ['OK'],
      });

      await alert.present();
  }

  async detect(){

    if(this.symptomslist != null){
    if(this.symptomslist.includes('other')){
      this.alerttest();
    }else{
    const modal = await this.modalCtrl.create({
      component: DetectresultsComponent,
    });
    this.modalService.addModal(modal);
    modal.present();
    }
    }
  else{
        this.alertdetect();
    }

  }

  async alerttest(){
    const alert = await this.alertController.create({
      header: 'New Symptom',
      message: 'Provide us symptoms that are not in the app to further research',
      inputs: [
        {
          name: 'District',
          type: 'text',
          placeholder: 'Type your District here'
        },
        {
          name: 'Symptoms',
          type: 'text',
          placeholder: 'Type symptom(s) here'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: (data) => {
            console.log('Submit clicked');
            const district = data.District;
            const symptoms = data.Symptoms;

            this.addnewsymptom(district,symptoms);

          }
        }
      ]
    });

    await alert.present();

  }

  async addnewsymptom(district: string,symptoms: string){
    const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
    loading.present();

    this.newsymptomService.newsymptoms(district,this.cropname,this.varietyname,this.pestsordiseases,symptoms).subscribe(
      response => {
        console.log(response);
      }
    );
    this.resetall();
    this.alertsuccess();
    loading.dismiss();
  }

  async alertsuccess(){
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Success',
      buttons: ['OK'],
    });

    await alert.present();
}


}
