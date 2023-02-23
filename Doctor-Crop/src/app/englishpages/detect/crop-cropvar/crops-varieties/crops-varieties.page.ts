import { SelectCropComponent } from './select-crop/select-crop.component';
import { CropsService } from './../../../../services/crops.service';
import { VarietiesComponent } from './varieties/varieties.component';
import { Crop } from '../crops/crop.model';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/services/modal.service';

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
    private modalService: ModalService
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

  cropselect(crop: Crop){
    this.crop=crop;
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
      component: VarietiesComponent,
      componentProps: {crop},
    });
    this.modalService.addModal(modal);
    modal.present();
  }

  async openselectcrop(){
    const modal = await this.modalCtrl.create({
      component: SelectCropComponent,
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
