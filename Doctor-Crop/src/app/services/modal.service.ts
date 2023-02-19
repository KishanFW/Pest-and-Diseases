import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private openModals: HTMLIonModalElement[] = [];

  constructor() { }

  addModal(modal: HTMLIonModalElement) {
    this.openModals.push(modal);
    modal.onDidDismiss().then(() => {
      this.removeModal(modal);
    });
  }

  removeModal(modal: HTMLIonModalElement) {
    const index = this.openModals.indexOf(modal);
    if (index > -1) {
      this.openModals.splice(index, 1);
    }
  }

  async closeAllModals() {
    while (this.openModals.length > 0) {
      const modal = this.openModals.pop();
      await modal.dismiss();
    }
  }
}
