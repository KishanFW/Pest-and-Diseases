import { Pest, Disease } from './../../crop-cropvar/crops/pests-diseases/pests-diseases.model';
import { VaiablesService } from './../../../../services/vaiables.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { ModalService } from 'src/app/services/modal.service';
import { SymptomsofpestService } from 'src/app/services/symptomsofpest.service';
import { DiseasesymptomsService } from 'src/app/services/diseasesymptoms.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-detectresults',
  templateUrl: './detectresults.component.html',
  styleUrls: ['./detectresults.component.scss'],
})
export class DetectresultsComponent implements OnInit {

  pestsordiseases: string = this.variableService.pestsordiseases;
  symptomslist: any[] = this.variableService.symptomslist;

  pests$: Observable<Pest[]>;
  diseases$: Observable<Disease[]>;

  constructor(
    public variableService: VaiablesService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private modalService: ModalService,
    private symptomsofpestService: SymptomsofpestService ,
    private diseasesymptomsService: DiseasesymptomsService
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
    loading.present();
    console.log(this.symptomslist);

    if(this.pestsordiseases == 'pests'){
      this.pests$ = this.symptomsofpestService.pestsofsymptoms(this.symptomslist).pipe(
        tap((pests) => {
          loading.dismiss();
          return pests;
          })
      );
    }
    else if(this.pestsordiseases == 'diseases'){
      this.diseases$ = this.diseasesymptomsService.diseasesofsymptoms(this.symptomslist).pipe(
        tap((pests) => {
          loading.dismiss();
          return pests;
          })
      );
    }
    else{
      this.pests$ = this.symptomsofpestService.pestsofsymptoms(this.symptomslist).pipe(
        tap((pests) => {
          return pests;
          })
      );
      this.diseases$ = this.diseasesymptomsService.diseasesofsymptoms(this.symptomslist).pipe(
        tap((pests) => {
          loading.dismiss();
          return pests;
          })
      );
    }

  }

  async closeModal() {
    await this.modalCtrl.dismiss();
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
