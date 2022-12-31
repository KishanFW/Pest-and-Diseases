import { ModalController } from '@ionic/angular';
import { Crop } from './../crop.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PestsComponent } from './pests/pests.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-pests-diseases',
  templateUrl: './pests-diseases.component.html',
  styleUrls: ['./pests-diseases.component.scss'],
})
export class PestsDiseasesComponent implements OnInit {

  @Input() crop: Crop;

  constructor(
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {}

  async openPestModal(crop: Crop){
    const modal = await this.modalCtrl.create({
      component: PestsComponent,
      componentProps: {crop},
    });
      modal.present();

  }

  async openDiseaseModal(crop: Crop){
    const modal = await this.modalCtrl.create({
      component: DiseasesComponent,
      componentProps: {crop},
    });
      modal.present();

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

}
