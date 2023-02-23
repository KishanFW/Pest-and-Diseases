import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { ModalService } from 'src/app/services/modal.service';
import { Variety } from '../../../variety.model';
import { Disease, DiseaseType } from '../../../../crops/pests-diseases/pests-diseases.model';
import { VpestsdiseasesService } from 'src/app/services/vpestsdiseases.service';
import { DiseasedetailsComponent } from '../../../../crops/pests-diseases/diseases/diseasedetails/diseasedetails.component';

@Component({
  selector: 'app-v-diseases',
  templateUrl: './v-diseases.component.html',
  styleUrls: ['./v-diseases.component.scss'],
})
export class VDiseasesComponent implements OnInit {
  @Input() variety: Variety;

  diseases$: Observable<Disease[]>;
  diseasetypes$: Observable<DiseaseType[]>;

  constructor(
    private vpestsdiseasesService: VpestsdiseasesService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private modalService: ModalService
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
    loading.present();

    this.diseasetypes$ = this.vpestsdiseasesService.getDiseasetypes().pipe(
      tap((diseasetypes)=>{
        return diseasetypes;
      })
    );

    this.diseases$ = this.vpestsdiseasesService.getdiseasesofvariety(this.variety.variety_name).pipe(
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
