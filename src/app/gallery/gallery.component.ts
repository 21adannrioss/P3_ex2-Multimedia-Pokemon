import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  // Aquesta imatge es veu de seguida a dalt de la pàgina, per això no té lazy loading
  destacada = {
    nom: 'foc',
    titol: 'Tipus Foc',
    alt: 'Tres flames vermelles, taronges i grogues sobre un fons fosc',
  };

  // La resta d'imatges estan més avall, així que es carreguen amb lazy loading. Cada imatge en té tres mides (400, 800 i 1200)
  imatges = [
    {
      nom: 'aigua',
      titol: 'Tipus Aigua',
      alt: 'Quatre capes d\'ones blaves amb un sol clar al cel',
    },
    {
      nom: 'planta',
      titol: 'Tipus Planta',
      alt: 'Fulles verdes de diferents mides sobre un fons de bosc',
    },
    {
      nom: 'electric',
      titol: 'Tipus Elèctric',
      alt: 'Un llamp groc amb cercles de llum sobre un cel fosc',
    },
    {
      nom: 'gel',
      titol: 'Tipus Gel',
      alt: 'Un floc de neu gran envoltat de flocs més petits sobre un fons blau clar',
    },
    {
      nom: 'roca',
      titol: 'Tipus Roca',
      alt: 'Un munt de pedres grosses davant d\'unes muntanyes de color marró',
    },
  ];
}