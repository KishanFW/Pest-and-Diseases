import { PestImg, Pest } from './../../../../../../detect/crop-cropvar/crops/pests-diseases/pests-diseases.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { ModalService } from 'src/app/services/modal.service';
import { Prevention } from 'src/app/englishpages/prevent/prevent.model';
import { ImgsofpestService } from 'src/app/services/imgsofpest.service';
import { PestsofcropService } from 'src/app/services/pestsofcrop.service';

@Component({
  selector: 'app-p-pest-details',
  templateUrl: './p-pest-details.component.html',
  styleUrls: ['./p-pest-details.component.scss'],
})
export class PPestDetailsComponent implements OnInit {

  @Input() pest: Pest;

  imgs$: Observable<PestImg[]>;
  preventions$: Observable<Prevention[]>;

  constructor(
    private pestsofcropService: PestsofcropService,
    private imgsofpestService: ImgsofpestService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private modalService: ModalService
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
      loading.present();

      this.imgs$ = this.imgsofpestService.getpestimgs().pipe(
        tap((imgs)=>{
          return imgs;
        })
      );

      this.preventions$ = this.pestsofcropService.getpreventionsofpest(this.pest.pest_name).pipe(
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
