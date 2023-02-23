import { Component, Input, OnInit, ViewChild  } from '@angular/core';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Variety } from '../../variety.model';
import { ModalService } from 'src/app/services/modal.service';
import { VPestsComponent } from './v-pests/v-pests.component';
import { VDiseasesComponent } from './v-diseases/v-diseases.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-v-pests-diseases',
  templateUrl: './v-pests-diseases.component.html',
  styleUrls: ['./v-pests-diseases.component.scss'],
})
export class VPestsDiseasesComponent implements OnInit {
  @Input() variety: Variety;


  constructor(
    private modalCtrl: ModalController,
    private modalService: ModalService
  ) { }

  ngOnInit() {}

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async closeAllModals() {
    await this.modalService.closeAllModals();
  }

  async openpestModal(variety: Variety){
    const modal = await this.modalCtrl.create({
      component: VPestsComponent,
      componentProps: {variety}
    });
    this.modalService.addModal(modal);
    modal.present();
  }

  async opendiseaseModal(variety: Variety){
    const modal = await this.modalCtrl.create({
      component: VDiseasesComponent,
      componentProps: {variety}
    });
    this.modalService.addModal(modal);
    modal.present();
  }

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

}
