import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
// or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DataService } from '../data.service';
// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit, AfterViewInit, OnDestroy  {

  constructor(private elementRef: ElementRef, private dataService: DataService) {
   
  }
  
  private tl: gsap.core.Timeline = gsap.timeline();
  texto_profesion: string | undefined;
  texto_nombre: string | undefined;
  header:any
  skills_data:any
  
  ngOnInit(): void {
    this.skills_data = this.dataService.data_skills();
    this.animacion_entrada_header()
    document.body.style.overflow = 'auto'; //habilito el scroll
    // throw new Error('Method not implemented.')
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.animacion_scrollTrigger()
  }

  ngOnDestroy(): void {
    if (this.tl) {
      this.tl.kill();
    }
  }


  

  

  animacion_entrada_header(){
    //los estilos iniciales de la imagen lo agrego aqui porque cuando lo ponia directo
    //en el css me daba problemas el translate, me estaba agregando un segundo translate y la imagen de descolocaba
    gsap.to(".img_header", {left: "50%", bottom:0, x: "-50%", duration: 0,opacity: 0});
    gsap.to(".img_header", {duration:1, opacity:1});
    gsap.from(".texto_profesion p", { position:"relative", top:"-200px"});
    gsap.from(".texto_nombre p", { position:"relative", top:"-200px"});
  }


  animacion_scrollTrigger(){

     

      let delay = 0
      // Obtén el contenedor principal
      const skillsContainer = this.elementRef.nativeElement.querySelector('.skills_container');
      // Obtén todos los elementos secundarios dentro del contenedor
      const skillElements = skillsContainer.querySelectorAll('.skill');
      // Obtén el contenedor principal
      const experiencias = this.elementRef.nativeElement.querySelector('.experiencias');
      // Obtén todos los elementos secundarios dentro del contenedor
      const experiencia = experiencias.querySelectorAll('.experiencia');

    // Crear una única línea de tiempo
    this.tl = gsap.timeline({
      scrollTrigger: {
          trigger: ".cuadro_padre",
          markers: true,
          start: "top top",
          end: "+=11000vh",
          scrub: true,
          pin: true
      }
  });
  
      
      const header_texto_nombre = gsap.to(".header .texto_nombre p", { y: "-100%", duration: 1 , opacity:0});
      const header_texto_profesion = gsap.to(".header .texto_profesion p", { y: "-100%", duration: 1 });
      const header_div_nombre = gsap.to(".header .texto_nombre", {top:"0%", y: "-100%", duration: 1 });
      const header_div_profesion = gsap.to(".header .texto_profesion", {top:"0%", y: "-100%", duration: 1 });
      const header_img = gsap.to(".img_header", {left:"0%" , x: "50%", y:"50%", duration: 1 , scale:2, ease:"power1.out"});
      const header_texto_sobre_mi = gsap.to(".header .texto_sobre_mi", {opacity:1, duration: 2 });
      const skills = gsap.to(".skills", {y:0 , duration: 6 , ease:"power1.out"});
      const header = gsap.to(".header", {y:"-100%", duration: 3, ease:"power1.out" });

      const skills_container = gsap.to(".skills_container", {y:"-50%" , duration: 5 });
      const skills_container2 = gsap.to(".skills_container", { x: "-100%", duration: 15, opacity:0 , delay:1});
      const cuadro_hijo2 = gsap.to(".cuadro_hijo2", { duration: 10, right: "0%" });
      const b3 = [skills_container2,cuadro_hijo2]
      const img_header_hijo2 = gsap.to(".img_header_hijo2", { duration:5, top:"-100%", ease:"power4.out"});
      const subhijo_cuadro_hijo2 = gsap.to(".subhijo_cuadro_hijo2", { duration:6, y:"0%"});
      const c3 = [subhijo_cuadro_hijo2, img_header_hijo2, ]

      this.tl.add(header_texto_nombre, 0)
      this.tl.add(header_texto_profesion, 0)
      this.tl.add(header_img, 1)
      this.tl.add(header_texto_sobre_mi, 2)
      this.tl.add(header_div_nombre, 2)
      this.tl.add(header_div_profesion, 2)
      this.tl.add(skills, 4)
      this.tl.add(header, 4)

      // Recorro los elementos secundarios y aplica animaciones
      skillElements.forEach((element: gsap.TweenTarget, index: number) => {
        const a = gsap.to(element, {
          y: 0,
          duration: 4,
          ease:"power2.out",
          delay: delay = index * 1// Retraso para que las animaciones se ejecuten de manera escalonada
        });
        this.tl.add(a, 5);
      });

      this.tl.add(skills_container,">-"+delay);
      this.tl.add(b3, ">"); // ">" indica que esta animación se agregará después de las anteriores en la línea de tiempo
      this.tl.add(c3, ">");

      // Recorro los elementos secundarios y aplica animaciones
      experiencia.forEach((element: gsap.TweenTarget, index: number) => {
        const a = gsap.to(element, {
          y: 0,
          duration: 2,
          ease:"power2.out",
          delay: delay = index * 0.1// Retraso para que las animaciones se ejecuten de manera escalonada
        });
        this.tl.add(a, ">-.8");
      });


      



  }
}
