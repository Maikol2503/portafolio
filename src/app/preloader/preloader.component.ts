

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent  implements AfterViewInit {
  
  @ViewChild("nombre_text") nombre_text!:ElementRef
  @ViewChild("apellido_text") apellido_text!:ElementRef
  @ViewChild("profesion_text") profesion_text!:ElementRef
  @ViewChild("portafolio_text") portafolio_text!:ElementRef
  @ViewChild("imagen1") imagen1!:ElementRef
  @ViewChild("imagen2") imagen2!:ElementRef
  @ViewChild("imagen3") imagen3!:ElementRef
  @ViewChild("imagen4") imagen4!:ElementRef
  @ViewChild("contenedor") contenedor_texto!:ElementRef

  ngAfterViewInit(): void {

    //letras
    const elemento1 = this.nombre_text.nativeElement
    const elemento2 = this.apellido_text.nativeElement
    const elemento3 = this.profesion_text.nativeElement
    const elemento4 = this.portafolio_text.nativeElement
    //imagenes
    const elemento5 = this.imagen1.nativeElement
    const elemento6 = this.imagen2.nativeElement
    const elemento7 = this.imagen3.nativeElement
    const elemento8 = this.imagen4.nativeElement
    //conendor
    const elemento9 = this.contenedor_texto.nativeElement

    //letras
   

    gsap.from(elemento1, { duration: 1.2, y: 200 , ease: 'power4.inOut', delay: 0 });
    gsap.from(elemento2, { duration: 1.2, y: 200 ,ease: 'power4.inOut', delay: 0.1 });
    gsap.from(elemento3, { duration: 1.5, y: -200 ,ease: 'power4.inOut', delay: 0.1 });
    gsap.from(elemento4, { duration: 1.5, y: -200 ,ease: 'power4.inOut', delay: 0.2 });
    //imagenes
    gsap.from(elemento5, { duration: 1.8, right: '-100%',ease: 'power4.in', delay: 1.7 });
    gsap.from(elemento6, { duration: 1.8, right: '-100%',ease: 'power4.in', delay: 1.9});
    gsap.from(elemento7, { duration: 1.8, right: '-100%',ease: 'power4.in', delay: 2.1});
    gsap.from(elemento8, { duration: 1.8, right: '-100%',ease: 'power4.in', delay: 2.3 });
    //contenedor
    gsap.from(elemento9, { duration: 2.2, x: "0%%" ,ease: 'power4.in', delay: 1.6});


}
}