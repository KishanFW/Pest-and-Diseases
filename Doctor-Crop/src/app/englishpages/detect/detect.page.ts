import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-detect',
  templateUrl: './detect.page.html',
  styleUrls: ['./detect.page.scss'],
})
export class DetectPage implements OnInit {

  constructor(private alertController: AlertController) { }

   async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }


  
  ngOnInit() {
  }

}
