import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { ModalService } from 'src/app/services/modal.service';
import { Variety } from '../../../variety.model';
import { Pest } from '../../../../crops/pests-diseases/pests-diseases.model';
import { VpestsdiseasesService } from 'src/app/services/vpestsdiseases.service';
import { PestdetailsComponent } from '../../../../crops/pests-diseases/pests/pestdetails/pestdetails.component';

@Component({
  selector: 'app-v-pests',
  templateUrl: './v-pests.component.html',
  styleUrls: ['./v-pests.component.scss'],
})
export class VPestsComponent implements OnInit {
  @Input() variety: Variety;

  pests$: Observable<Pest[]>;

  constructor(
    private vpestsdiseasesService: VpestsdiseasesService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private modalService: ModalService
  ) { }

 async ngOnInit() {
  const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
    loading.present();

    this.pests$ = this.vpestsdiseasesService.getpestsofvariety(this.variety.variety_name).pipe(
      tap((pests) => {
        loading.dismiss();
        return pests;
        })
    );
 }

 async openPestDetailsModal(pest: Pest){
  const modal = await this.modalCtrl.create({
    component: PestdetailsComponent,
    componentProps: {pest},
  });
  this.modalService.addModal(modal);
  modal.present();

}

async closeModal() {
  await this.modalCtrl.dismiss();
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


}
