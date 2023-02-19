import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Disease, DiseaseType, DiseaseImg, DiseaseSymptom } from '../../pests-diseases.model';
import { DiseasesymptomsService } from 'src/app/services/diseasesymptoms.service';
import { DiseaseimgsService } from 'src/app/services/diseaseimgs.service';
import { DiseasesofcropService } from 'src/app/services/diseasesofcrop.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-diseasedetails',
  templateUrl: './diseasedetails.component.html',
  styleUrls: ['./diseasedetails.component.scss'],
})
export class DiseasedetailsComponent implements OnInit {

  @Input() disease: Disease;

  imgs$: Observable<DiseaseImg[]>;
  symptoms$: Observable<DiseaseSymptom[]>;
  diseasetypes$: Observable<DiseaseType[]>;

  constructor(
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private diseasesofcropService: DiseasesofcropService,
    private diseaseimgsService: DiseaseimgsService,
    private diseasesymptomsService: DiseasesymptomsService,
    private modalService: ModalService
  ) { }

 async ngOnInit() {
  const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
  loading.present();

  this.diseasetypes$ = this.diseasesofcropService.getDiseasetypes().pipe(
    tap((diseasetypes)=>{
      return diseasetypes;
    })
  );

  this.imgs$ = this.diseaseimgsService.getDiseaseimgs().pipe(
    tap((imgs)=>{
      return imgs;
    })
  );

  this.symptoms$ = this.diseasesymptomsService.getDiseasesymptoms().pipe(
    tap((symptoms)=>{
      loading.dismiss();
      return symptoms;
    })
  );

 }

closeModal(){
  this.modalCtrl.dismiss();
}

async closeAllModals() {
  await this.modalService.closeAllModals();
}

@ViewChild('popover') popover;

isOpen = false;

presentPopover(e: Event) {
  this.popover.event = e;
  this.isOpen = true;
}

}
