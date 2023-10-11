import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {
  itemSeleccionado1: boolean = false;
  itemSeleccionado2: boolean = false;
  itemSeleccionado3: boolean = false;

  constructor(
    public toastController: ToastController,
  
  ) {}

  async showToast(message: string, itemSeleccionado: boolean) {
    if (itemSeleccionado) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000,
        position: 'top',
      });
      toast.present();
    }
  }

}

