import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { PestsofcropService } from 'src/app/services/pestsofcrop.service';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { ModalService } from 'src/app/services/modal.service';
import { Pest } from 'src/app/englishpages/detect/crop-cropvar/crops/pests-diseases/pests-diseases.model';
import { Crop } from 'src/app/englishpages/detect/crop-cropvar/crops/crop.model';
import { PPestDetailsComponent } from './p-pest-details/p-pest-details.component';

@Component({
  selector: 'app-p-pests',
  templateUrl: './p-pests.component.html',
  styleUrls: ['./p-pests.component.scss'],
})
export class PPestsComponent implements OnInit {

  @Input() crop: Crop;

  pests$: Observable<Pest[]>;

  constructor(
    private pestsofcropService: PestsofcropService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private modalService: ModalService
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
     loading.present();

     this.pests$ = this.pestsofcropService.getPests(this.crop.crop_name).pipe(
       tap((pests) => {
         loading.dismiss();
         return pests;
         })
     );

   }

   async openPestDetailsModal(pest: Pest){
     const modal = await this.modalCtrl.create({
       component: PPestDetailsComponent,
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
