import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  nombre: string = "Juan Gabriel";
  apellidos: string = "Lara Gómez";
  informacion: string = "Información sobre la página";
  version: number = 1.0;
  fechaCreacion: string = "07/10/2023";
  descripcion: string = "'RetroGame Connect' es una aplicación que te permite conectarte y disfrutar de juegos retro clásicos en tu dispositivo móvil. Explora una colección de juegos icónicos de la era retro y juega en una experiencia nostálgica. Revive la diversión de los juegos.";

  constructor() { }

  ngOnInit() {
  }

}
