import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Crop } from 'src/app/englishpages/detect/crop-cropvar/crops/crop.model';
import { ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/services/modal.service';
import { PPestsComponent } from './p-pests/p-pests.component';
import { PDiseasesComponent } from './p-diseases/p-diseases.component';

@Component({
  selector: 'app-prevent-pests-diseases',
  templateUrl: './prevent-pests-diseases.component.html',
  styleUrls: ['./prevent-pests-diseases.component.scss'],
})
export class PreventPestsDiseasesComponent implements OnInit {
  @Input() crop: Crop;

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

  async openPestModal(crop: Crop){
    const modal = await this.modalCtrl.create({
      component: PPestsComponent,
      componentProps: {crop},
    });
    this.modalService.addModal(modal);
    modal.present();

  }

  async openDiseaseModal(crop: Crop){
    const modal = await this.modalCtrl.create({
      component: PDiseasesComponent,
      componentProps: {crop},
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
