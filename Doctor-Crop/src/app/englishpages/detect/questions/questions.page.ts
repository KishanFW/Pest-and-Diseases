import { VarietiesService } from 'src/app/services/varieties.service';
import { Variety } from './../crop-cropvar/crops-varieties/variety.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Crop } from '../crop-cropvar/crops/crop.model';
import { CropsService } from 'src/app/services/crops.service';
import { LoadingController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  cropname: string = null;
  varietyname: string = null;
  crops$: Observable<Crop[]>;
  varieties$: Observable<Variety[]>;
;
  constructor(
    private cropsService: CropsService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
    private varietiesService: VarietiesService
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

  async variety(){
    const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
    loading.present();

    this.varieties$ = this.varietiesService.getvarietiesofcrop(this.cropname).pipe(
      tap((varieties)=>{
        loading.dismiss();
        return varieties;
      })
    )
  }

  nocropselected(){
    if(this.cropname == null)
      this.presentAlert();
  }

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'No crop is selected!',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
