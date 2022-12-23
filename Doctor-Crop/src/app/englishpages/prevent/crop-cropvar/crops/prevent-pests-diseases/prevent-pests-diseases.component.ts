import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Crop } from 'src/app/englishpages/detect/crop-cropvar/crops/crop.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-prevent-pests-diseases',
  templateUrl: './prevent-pests-diseases.component.html',
  styleUrls: ['./prevent-pests-diseases.component.scss'],
})
export class PreventPestsDiseasesComponent implements OnInit {
  @Input() crop: Crop;

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
