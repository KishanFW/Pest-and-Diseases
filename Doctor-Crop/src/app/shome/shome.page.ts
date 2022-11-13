import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-shome',
  templateUrl: './shome.page.html',
  styleUrls: ['./shome.page.scss'],
})
export class ShomePage implements OnInit {

  constructor(private alertController: AlertController) { }

  async showAlert() {
    const alert = await this.alertController.create({
    
      
      message: 'හඳුනා ගැනීම යනු පැළ සිටුවීමෙන් පසු රෝග ලක්ෂණ හඳුනා ගැනීමයි.',

      buttons: ['හරි'],


    });

    await alert.present();
  }



async presentAlert() {
    const alert = await this.alertController.create({
    
      
      message: 'වැළැක්වීම යනු රෝග වළක්වා ගැනීම සඳහා පූර්වාරක්ෂාවන් අනුගමනය කිරීමයි.',

      buttons: ['හරි'],


    });
    await alert.present();
  }

  ngOnInit() {
  }

}
