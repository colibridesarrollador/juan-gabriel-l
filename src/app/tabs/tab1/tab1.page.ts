import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  items: any[] = [
    { text: 'Mario Bross', checked: false, image:"/assets/mario.png" },
    { text: 'Crash Bandicoot', checked: false, image:"/assets/crash.png" },
    { text: 'Megaman', checked: false, image:"/assets/megaman.jpg" },
  ];

  constructor(public toastController: ToastController) {}

  showToast(item: any) {
    if (item.checked) {
      this.presentToast(item.text);
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: `Seleccionaste: ${message}`,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
}
