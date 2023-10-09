import { Component } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  items: any[] = [
    { text: 'Mario Bross', checked: false, image: "/assets/mario.png", mostrarTarjeta: false, imagenTarjeta: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Super_Mario_Bros._Logo.svg/800px-Super_Mario_Bros._Logo.svg.png", descripcion: "Mario Bross es un personaje famoso de videojuegos.", url: 'https://www.minijuegos.com/juego/super-mario-bros' },
    { text: 'Crash Bandicoot', checked: false, image: "/assets/crash.png", mostrarTarjeta: false, imagenTarjeta: "https://media.vandal.net/m/1420/crash-bandicoot-201610518540_1.jpg", descripcion: "Crash Bandicoot es un marsupial aventurero.", url: 'https://www.minijuegos.com/juego/crash-bandicoot' },
    { text: 'Megaman', checked: false, image: "/assets/megaman.jpg", mostrarTarjeta: false, imagenTarjeta: "https://lostmediawiki.com/w/images/3/3c/Mega_Man_II_Lite_Startup.png", descripcion: "Megaman es un héroe que puede copiar poderes.", url: 'https://www.minijuegos.com/juego/mega-man-rpg-2' },
  ];

  constructor(public toastController: ToastController, public navCtrl: NavController) {}

  mostrarTarjeta(item: any) {
    if (item.checked) {
      item.mostrarTarjeta = true;
      this.presentarToast(`Seleccionaste: ${item.text}`);
    } else {
      item.mostrarTarjeta = false;
    }
  }

  async presentarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  // Función para abrir un URL
  irAURL(url: string) {
    // Abre el URL en una nueva ventana del navegador
    window.open(url, '_blank');
  }
}
