import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})

export class Tab2Page {

  cards = [
    {
      title: 'Street Figther',
      videoUrl: 'https://www.youtube.com/watch?v=xI284D4y1q4',
      imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271527e4-1c57-4bd7-8244-7e372af7bb74/d9q05nz-665209e3-92cc-43e8-95fa-50c0b4da86ff.jpg/v1/fill/w_1024,h_768,q_75,strp/street_fighter_2_intro_3d_pixel_art_by_pixelbuddy_d9q05nz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvMjcxNTI3ZTQtMWM1Ny00YmQ3LTgyNDQtN2UzNzJhZjdiYjc0XC9kOXEwNW56LTY2NTIwOWUzLTkyY2MtNDNlOC05NWZhLTUwYzBiNGRhODZmZi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eqUlkY3mALikqgq2mu-1pnZZhAtlfhDBXUux6it1IkI',
      description: '"Street Fighter" es una serie de juegos de lucha con personajes icónicos y combates uno contra uno. Creada por Capcom en 1987, es un pionero en el género.',
      externalLink: 'https://www.minijuegos.com/juego/street-fighter-ii-champion-edition',
    },
    {
      title: 'Tekken 3',
      videoUrl: 'https://www.youtube.com/watch?v=9OViNqWFF6w',
      imageUrl: 'https://i.ebayimg.com/images/g/uI4AAOSw58ljCvn6/s-l500.jpg',
      description: '"Tekken" es una serie de videojuegos de lucha con una variedad de personajes y estilos de lucha, lanzada en 1994.',
      externalLink: 'https://www.minijuegos.com/juego/tekken-3',
    },
    {
      title: 'Mortal Combat',
      videoUrl: 'https://www.youtube.com/watch?v=lW7r2w8SsN0',
      imageUrl: 'https://s3.crackedcdn.com/phpimages/article/8/2/4/711824_1440x440.webp?v=3',
      description: '"Mortal Kombat" es una serie de videojuegos de lucha con violencia extrema y personajes icónicos desde 1992.',
      externalLink: 'https://www.minijuegos.com/juego/mortal-kombat',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  handleVideoError(card: any) {
    card.showImage = true;
  }

  getSafeYouTubeEmbedUrl(videoUrl: string): SafeResourceUrl {
    const embedUrl = videoUrl.replace('watch?v=', 'embed/');
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
