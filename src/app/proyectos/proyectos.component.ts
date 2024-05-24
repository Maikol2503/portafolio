import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private data_services:DataService){}

  private tl: gsap.core.Timeline = gsap.timeline();
  list_projects:any = []

  ngOnInit(): void {
    this.list_projects = this.data_services.todos_los_proyectos()
    document.body.style.overflow = 'auto'; //habilito el scroll
  }

  onMouseEnter(event: MouseEvent) {
    // this.isHovered = true;
    const targetElement = event.target as HTMLElement;
    // Ahora tienes acceso al elemento en el que estás
    const titulo = targetElement.querySelector('h1');
    const subtitulo = targetElement.querySelector('p');
    let subtitulo_width = subtitulo?.clientWidth //obtengo el width del subtitulo

    if (titulo) {
      //traslado el titulo a la izquierda con los mismos pixeles del ancho del subtitulo
      this.tl = gsap.timeline()
      let ani_titulo = gsap.to(titulo, {duration:.6, x:"-"+subtitulo_width, ease:"power4.out", opacity:1});
      let ani_subtitulo = gsap.to(subtitulo, {duration:.4, y:0, ease:"power4.out", opacity:1, delay:.4});
      this.tl.add(ani_titulo,0)
      this.tl.add(ani_subtitulo,0)
    }
  }

  onMouseLeave(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const titulo = targetElement.querySelector('h1');
    const subtitulo = targetElement.querySelector('p');

    if (titulo) {
      // Cancelar cualquier animación anterior
      
      if (this.tl) {
        this.tl.kill();
      }

      this.tl = gsap.timeline()
      let ani_titulo = gsap.to(titulo, {duration:.6, x:0, ease:"power4.out", delay:.1, opacity:.5});
      let ani_subtitulo = gsap.to(subtitulo, {duration:.3, y:"100%", ease:"power4.out", opacity:0});
      this.tl.add(ani_titulo,0)
      this.tl.add(ani_subtitulo,0)
    }
  }



}