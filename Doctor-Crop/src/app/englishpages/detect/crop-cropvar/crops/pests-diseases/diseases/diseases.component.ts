import { DiseasedetailsComponent } from './diseasedetails/diseasedetails.component';
import { DiseaseType } from './../pests-diseases.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Crop } from '../../crop.model';
import { ModalController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { DiseasesofcropService } from 'src/app/services/diseasesofcrop.service';
import { Disease } from '../pests-diseases.model';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.scss'],
})
export class DiseasesComponent implements OnInit {
  @Input() crop: Crop;

  diseases$: Observable<Disease[]>;
  diseasetypes$: Observable<DiseaseType[]>;

  constructor(
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private diseasesofcropService: DiseasesofcropService,
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

  async closeAllModals() {
    await this.modalService.closeAllModals();
  }

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  async openDiseaseDetailsModal(disease: Disease){
    const modal = await this.modalCtrl.create({
      component: DiseasedetailsComponent,
      componentProps: {disease},
    });
    this.modalService.addModal(modal);
    modal.present();
  }

  nothing(){

  }

}
