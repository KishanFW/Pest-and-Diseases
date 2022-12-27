import { PreventSelectCropComponent } from './prevent-select-crop/prevent-select-crop.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Crop } from 'src/app/englishpages/detect/crop-cropvar/crops/crop.model';
import { CropsService } from 'src/app/services/crops.service';
import { PreventVarietiesComponent } from './prevent-varieties/prevent-varieties.component';

@Component({
  selector: 'app-crops-varieties',
  templateUrl: './crops-varieties.page.html',
  styleUrls: ['./crops-varieties.page.scss'],
})
export class CropsVarietiesPage implements OnInit {
  crop: Crop = null;
  crops$: Observable<Crop[]>;

  constructor(
    private cropsService: CropsService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
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

  govariety(){
    if(this.crop == null){
      this.openselectcrop();
    }
    else if(this.crop){
      this.openvarietiesModal(this.crop);
    }
  }

  async openvarietiesModal(crop: Crop){
    const modal = await this.modalCtrl.create({
      component: PreventVarietiesComponent,
      componentProps: {crop},
    });

    modal.present();
  }

  async openselectcrop(){
    const modal = await this.modalCtrl.create({
      component: PreventSelectCropComponent,
    });

    modal.present();
  }

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  cropselect(crop: Crop){
    this.crop=crop;
  }
}

