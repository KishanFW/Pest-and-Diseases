import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Pest, PestImg, PestSymptom } from '../../pests-diseases.model';
import { ImgsofpestService } from 'src/app/services/imgsofpest.service';
import { SymptomsofpestService } from 'src/app/services/symptomsofpest.service';


@Component({
  selector: 'app-pestdetails',
  templateUrl: './pestdetails.component.html',
  styleUrls: ['./pestdetails.component.scss'],
})
export class PestdetailsComponent implements OnInit {

  @Input() pest: Pest;

  imgs$: Observable<PestImg[]>;
  symptoms$: Observable<PestSymptom[]>

  constructor(
    private imgsofpestService: ImgsofpestService,
    private symptomsofpestService: SymptomsofpestService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

 async ngOnInit() {
  const loading = await this.loadingCtrl.create({message: 'Please Wait ...'});
    loading.present();

   this.symptoms$ = this.symptomsofpestService.getpestsymptoms().pipe(
        tap((symptoms)=>{
          return symptoms;
        })
    );

    this.imgs$ = this.imgsofpestService.getpestimgs().pipe(
      tap((imgs)=>{
        loading.dismiss();
        return imgs;
      })
    );
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
