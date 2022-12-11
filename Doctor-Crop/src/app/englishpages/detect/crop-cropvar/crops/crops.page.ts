import { PestsDiseasesComponent } from './pests-diseases/pests-diseases.component';
import { CropsService } from './../../../../services/crops.service';
import { Crop } from './crop.model';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crops',
  templateUrl: './crops.page.html',
  styleUrls: ['./crops.page.scss'],
})
export class CropsPage implements OnInit {
  crops$: Observable<Crop[]>;

  constructor(
    private cropsService: CropsService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({message: 'Loading ...'});
    loading.present();

    this.crops$ = this.cropsService.getCrops().pipe(
      tap((crops) => {
        loading.dismiss();
        return crops;
      })
    );
  }

  async openPests_diseasesModal(crop: Crop){
    const modal = await this.modalCtrl.create({
      component: PestsDiseasesComponent,
      componentProps: {crop},
    });

      modal.present();
  }

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
