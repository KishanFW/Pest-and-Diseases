import { CropsService } from './../../../../services/crops.service';
import { Crop } from './crop.model';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-crops',
  templateUrl: './crops.page.html',
  styleUrls: ['./crops.page.scss'],
})
export class CropsPage implements OnInit {
  crops$: Observable<Crop[]>;

  constructor(
    private cropsService: CropsService,
    private loadingCtrl: LoadingController
  ) { }

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

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
