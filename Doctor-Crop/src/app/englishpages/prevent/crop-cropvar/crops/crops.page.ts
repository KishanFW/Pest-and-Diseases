import { PreventPestsDiseasesComponent } from './prevent-pests-diseases/prevent-pests-diseases.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { LoadingController, ModalController } from '@ionic/angular';
import { Crop } from 'src/app/englishpages/detect/crop-cropvar/crops/crop.model';
import { CropsService } from 'src/app/services/crops.service';
import { ModalService } from 'src/app/services/modal.service';

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
    private modalCtrl: ModalController,
    private modalService: ModalService
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
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
      component: PreventPestsDiseasesComponent,
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
