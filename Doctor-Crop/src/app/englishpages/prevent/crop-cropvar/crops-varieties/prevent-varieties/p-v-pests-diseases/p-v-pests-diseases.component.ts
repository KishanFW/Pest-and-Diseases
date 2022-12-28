import { Component, Input, OnInit, ViewChild  } from '@angular/core';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Variety } from 'src/app/englishpages/detect/crop-cropvar/crops-varieties/variety.model';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-p-v-pests-diseases',
  templateUrl: './p-v-pests-diseases.component.html',
  styleUrls: ['./p-v-pests-diseases.component.scss'],
})
export class PVPestsDiseasesComponent implements OnInit {
  @Input() variety: Variety;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

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
