import { DiseasesymptomsService } from './../../../../../../services/diseasesymptoms.service';
import { DiseaseimgsService } from './../../../../../../services/diseaseimgs.service';
import { DiseaseType, DiseaseImg, DiseaseSymptom } from './../pests-diseases.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Crop } from '../../crop.model';
import { ModalController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { DiseasesofcropService } from 'src/app/services/diseasesofcrop.service';
import { Disease } from '../pests-diseases.model';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.scss'],
})
export class DiseasesComponent implements OnInit {
  @Input() crop: Crop;

  diseases$: Observable<Disease[]>;
  diseasetypes$: Observable<DiseaseType[]>;
  imgs$: Observable<DiseaseImg[]>;
  symptoms$: Observable<DiseaseSymptom[]>;

  constructor(
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private diseasesofcropService: DiseasesofcropService,
    private diseaseimgsService: DiseaseimgsService,
    private diseasesymptomsService: DiseasesymptomsService
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
        return symptoms;
      })
    );

    this.diseases$ = this.diseasesofcropService.getDiseases(this.crop.crop_name).pipe(
      tap((diseases)=>{
        loading.dismiss();
        return diseases;
      })
    );
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  scroll(id: string){
    let el = document.getElementById(id);
    el.scrollIntoView();
  }

}
