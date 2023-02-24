import { SelectCropComponent } from './select-crop/select-crop.component';
import { CropsService } from './../../../../services/crops.service';
import { VarietiesComponent } from './varieties/varieties.component';
import { Crop } from '../crops/crop.model';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/services/modal.service';
import { TranslateService } from '@ngx-translate/core'; //1

@Component({
  selector: 'app-crops-varieties',
  templateUrl: './crops-varieties.page.html',
  styleUrls: ['./crops-varieties.page.scss'],
})
export class CropsVarietiesPage implements OnInit {
  crop: Crop = null;
  language: string = this.translateService.currentLang; // 2
  crops$: Observable<Crop[]>;

  constructor(
    private cropsService: CropsService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private modalService: ModalService,
    private translateService: TranslateService //3
  ) { }

  async languageChange() {  
    this.translateService.use(this.language);  //4
    this.translateService.onLangChange.subscribe(()=>{
      this.crops$ = this.cropsService.getCrops().pipe(
        tap((crops) => {
        return crops;
        })
      );
    })
    
  }  //5

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
