import { PestsDiseasesComponent } from './pests-diseases/pests-diseases.component';
import { CropsService } from './../../../../services/crops.service';
import { Crop } from './crop.model';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/services/modal.service';
import { TranslateService } from '@ngx-translate/core'; //1

@Component({
  selector: 'app-crops',
  templateUrl: './crops.page.html',
  styleUrls: ['./crops.page.scss'],
})
export class CropsPage implements OnInit {
  language: string = this.translateService.currentLang; // 2
  crops$: Observable<Crop[]>;

  constructor(
    private cropsService: CropsService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private modalService: ModalService,
    private translateService: TranslateService //3
  ) { }

  languageChange() {  // add this
    this.translateService.use(this.language);  // add this
  }  // add this


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
      component: PestsDiseasesComponent,
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
