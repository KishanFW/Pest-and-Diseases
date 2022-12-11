import { ModalController } from '@ionic/angular';
import { Crop } from './../crop.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-pests-diseases',
  templateUrl: './pests-diseases.component.html',
  styleUrls: ['./pests-diseases.component.scss'],
})
export class PestsDiseasesComponent implements OnInit {

  @Input() crop: Crop;

  constructor(private modalCtrl: ModalController) { }

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
