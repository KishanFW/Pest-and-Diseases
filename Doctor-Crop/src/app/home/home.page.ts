import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private alertController: AlertController) {}

  async showAlert() {
    const alert = await this.alertController.create({
    
      
      message: 'Detect means identifying symptoms after planting.',

      buttons: ['OK'],


    });

    await alert.present();
  }



async presentAlert() {
    const alert = await this.alertController.create({
    
      
      message: 'Prevent means following precautions to avoid diseases.',

      buttons: ['OK'],


    });

    await alert.present();
  }
  
  
}