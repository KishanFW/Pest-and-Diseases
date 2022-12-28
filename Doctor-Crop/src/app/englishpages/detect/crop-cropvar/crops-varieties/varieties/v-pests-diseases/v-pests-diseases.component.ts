import { Component, Input, OnInit, ViewChild  } from '@angular/core';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Variety } from '../../variety.model';

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
