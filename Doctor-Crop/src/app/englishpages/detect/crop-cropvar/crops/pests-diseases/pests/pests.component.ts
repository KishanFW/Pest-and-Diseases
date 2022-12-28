import { PestsDiseasesComponent } from './../pests-diseases.component';
import { PestImg, PestSymptom } from './../pests-diseases.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Crop } from '../../crop.model';
import { ModalController, LoadingController } from '@ionic/angular';
import { PestsofcropService } from 'src/app/services/pestsofcrop.service';
import { ImgsofpestService } from 'src/app/services/imgsofpest.service';
import { SymptomsofpestService } from 'src/app/services/symptomsofpest.service';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Pest } from '../pests-diseases.model';

@Component({
  selector: 'app-pests',
  templateUrl: './pests.component.html',
  styleUrls: ['./pests.component.scss'],
})
export class PestsComponent implements OnInit {
  @Input() crop: Crop;

  pests$: Observable<Pest[]>;
  imgs$: Observable<PestImg[]>;
  symptoms$: Observable<PestSymptom[]>

  constructor(
    private pestsofcropService: PestsofcropService,
    private imgsofpestService: ImgsofpestService,
    private symptomsofpestService: SymptomsofpestService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private pestsdiseases: PestsDiseasesComponent
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
        return imgs;
      })
    );

    this.pests$ = this.pestsofcropService.getPests(this.crop.crop_name).pipe(
      tap((pests) => {
        loading.dismiss();
        return pests;
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

  scroll(id: string){
    let el = document.getElementById(id);
    el.scrollIntoView();
  }

}
