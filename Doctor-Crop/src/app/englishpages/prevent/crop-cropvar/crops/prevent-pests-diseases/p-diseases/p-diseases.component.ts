import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { DiseasesofcropService } from 'src/app/services/diseasesofcrop.service';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { ModalService } from 'src/app/services/modal.service';
import { Disease, DiseaseType } from 'src/app/englishpages/detect/crop-cropvar/crops/pests-diseases/pests-diseases.model';
import { Crop } from 'src/app/englishpages/detect/crop-cropvar/crops/crop.model';
import { PDiseaseDetailsComponent } from './p-disease-details/p-disease-details.component';

@Component({
  selector: 'app-p-diseases',
  templateUrl: './p-diseases.component.html',
  styleUrls: ['./p-diseases.component.scss'],
})
export class PDiseasesComponent implements OnInit {

  @Input() crop: Crop;

  diseases$: Observable<Disease[]>;
  diseasetypes$: Observable<DiseaseType[]>;

  constructor(
    private diseasesofcropService: DiseasesofcropService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
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
      component: PDiseaseDetailsComponent,
      componentProps: {disease},
    });
    this.modalService.addModal(modal);
    modal.present();
  }

  nothing(){

  }

}
