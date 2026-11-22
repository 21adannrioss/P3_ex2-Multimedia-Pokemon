import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css',
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  // Fa referència al requadre que ocupa l'espai del vídeo, per vigilar quan entra a la pantalla
  @ViewChild('espai') espaiRef?: ElementRef<HTMLDivElement>;

  // Mentre sigui false només es veu la portada i no es descarrega cap vídeo
  carregat = false;

  // L'observador vigila quan el requadre entra a la pantalla
  private observador?: IntersectionObserver;

  constructor(private cdr: ChangeDetectorRef){
    // Si el navegador no té IntersectionObserver perquè és molt antic, mostrem el vídeo directament
    if(!('IntersectionObserver' in window)) {
      this.carregat = true;
    }
  }

  ngAfterViewInit() {
    if(this.carregat || !this.espaiRef) {
      return;
    }

    // Quan el requadre està a prop de la pantalla (200px abans) es carrega el vídeo
    this.observador = new IntersectionObserver(
      (entrades) => {
        if(entrades[0].isIntersecting) {
          this.carregat = true;
          this.cdr.detectChanges(); // S'ha de cridar perquè el canvi de carregat es vegi a la vista
          this.observador?.disconnect(); // Ja no cal seguir vigilant
        }
      },
      { rootMargin: '200px' }
    );

    this.observador.observe(this.espaiRef.nativeElement);
  }

  ngOnDestroy() {
    // S'acaba l'observador quan el component desapareix
    this.observador?.disconnect();
  }
}