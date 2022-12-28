import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { VarietiesService } from 'src/app/services/varieties.service';
import { Crop } from 'src/app/englishpages/detect/crop-cropvar/crops/crop.model';
import { Variety } from 'src/app/englishpages/detect/crop-cropvar/crops-varieties/variety.model';
import { PVPestsDiseasesComponent } from './p-v-pests-diseases/p-v-pests-diseases.component';

@Component({
  selector: 'app-prevent-varieties',
  templateUrl: './prevent-varieties.component.html',
  styleUrls: ['./prevent-varieties.component.scss'],
})
export class PreventVarietiesComponent implements OnInit {
  @Input() crop:Crop;

  varieties$: Observable<Variety[]>;

  constructor(
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private varietiesService: VarietiesService,
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
    loading.present();

    this.varieties$ = this.varietiesService.getvarietiesofcrop(this.crop.crop_name).pipe(
      tap((varieties)=>{
        loading.dismiss();
        return varieties;
      })
    )
  }

  async openPests_diseasesModal(variety: Variety){
    const modal = await this.modalCtrl.create({
      component: PVPestsDiseasesComponent,
      componentProps: {variety},
    });

      modal.present();
  }

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
