import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Crop } from '../../crop.model';
import { ModalController, LoadingController } from '@ionic/angular';
import { PestsofcropService } from 'src/app/services/pestsofcrop.service';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Pest } from '../pests-diseases.model';
import { PestsDiseasesComponent } from '../pests-diseases.component';

@Component({
  selector: 'app-pests',
  templateUrl: './pests.component.html',
  styleUrls: ['./pests.component.scss'],
})
export class PestsComponent implements OnInit {
  @Input() crop: Crop;
  cropname: string;

  pests$: Observable<Pest[]>;

  constructor(
    private pestsofcropService: PestsofcropService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private pestdisease: PestsDiseasesComponent
    ) { }

  async ngOnInit() {
   const loading = await this.loadingCtrl.create({message: 'Loading ...'});
    loading.present();

    this.pests$ = this.pestsofcropService.getPests(this.crop.crop_name).pipe(
      tap((pests) => {
        loading.dismiss();
        return pests;
        })
    );

  }

  closeModal(){
    this.pestdisease.closeModal();
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
