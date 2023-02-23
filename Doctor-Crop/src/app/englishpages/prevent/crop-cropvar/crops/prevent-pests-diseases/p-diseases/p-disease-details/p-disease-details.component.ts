import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { ModalService } from 'src/app/services/modal.service';
import { Prevention } from 'src/app/englishpages/prevent/prevent.model';
import { DiseaseimgsService } from 'src/app/services/diseaseimgs.service';
import { DiseasesofcropService } from 'src/app/services/diseasesofcrop.service';
import { Disease, DiseaseImg } from 'src/app/englishpages/detect/crop-cropvar/crops/pests-diseases/pests-diseases.model';


@Component({
  selector: 'app-p-disease-details',
  templateUrl: './p-disease-details.component.html',
  styleUrls: ['./p-disease-details.component.scss'],
})
export class PDiseaseDetailsComponent implements OnInit {
  @Input() disease: Disease;

  imgs$: Observable<DiseaseImg[]>;
  preventions$: Observable<Prevention[]>;

  constructor(
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private diseasesofcropService: DiseasesofcropService,
    private diseaseimgsService: DiseaseimgsService,
    private modalService: ModalService
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
    loading.present();

    this.preventions$ = this.diseasesofcropService.getpreventionsofdisease(this.disease.disease_name).pipe(
      tap((imgs)=>{
        return imgs;
      })
    );

    this.imgs$ = this.diseaseimgsService.getDiseaseimgs().pipe(
      tap((imgs)=>{
        loading.dismiss();
        return imgs;
      })
    );

   }

  closeModal(){
    this.modalCtrl.dismiss();
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
