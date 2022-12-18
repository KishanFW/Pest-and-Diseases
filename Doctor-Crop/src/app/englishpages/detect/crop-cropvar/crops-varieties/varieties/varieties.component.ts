import { Variety } from './../variety.model';
import { Crop } from '../../crops/crop.model';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { VarietiesService } from 'src/app/services/varieties.service';
import { CropsVarietiesPage } from '../crops-varieties.page';

@Component({
  selector: 'app-varieties',
  templateUrl: './varieties.component.html',
  styleUrls: ['./varieties.component.scss'],
})
export class VarietiesComponent implements OnInit {
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
