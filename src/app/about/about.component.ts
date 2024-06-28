import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
// or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DataService } from '../data.service';
// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy  {

  constructor(private elementRef: ElementRef, private dataService: DataService) {
   
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkPositionAndApplyStyle();
  }




  getBackground(color: string): string {
    return `linear-gradient(to right, black, ${color})`;
  }


  checkPositionAndApplyStyle() {
    // const textoElements = this.elementRef.nativeElement.querySelectorAll('.titulo');
    // const slider = this.elementRef.nativeElement.querySelector('.skills_container')
    // const slider_deplazado_izquierda = Math.abs(slider.getBoundingClientRect().left)
    
   
    // textoElements.forEach((element: HTMLElement, index: number) => {
    //   const rect = element.getBoundingClientRect();
      
    //   if (rect.left <= 40 ) {
    //     element.classList.add('texto-estilizado');
    //     // element.style.position = 'fixed'
    //     element.style.left = `${slider_deplazado_izquierda}px`;
    //   } 
    //   else{
    //     element.style.left = `${slider_deplazado_izquierda + rect.left}px`;
       
    //   }
    // });
  }












  
  private tl: gsap.core.Timeline = gsap.timeline();
  @ViewChildren('skill',{ read: ElementRef }) skill!:QueryList<ElementRef>;
  @ViewChildren('containerSkillBar',{ read: ElementRef }) containerSkillBar!:QueryList<ElementRef>;
  texto_profesion: string | undefined;
  texto_nombre: string | undefined;
  header:any
  skills_data:any
  delay!:number
  
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

    const mm = gsap.matchMedia();
    
    // altura de la seccion skill, osea la altura de la pantalla
    const skillSectionHeigth = this.elementRef.nativeElement.querySelector('.skills-section').offsetHeight;
    // altura del cotendor de las barras de los skill
    const skillsContainerBarHeigth = this.elementRef.nativeElement.querySelector('.container-skill-bar').offsetHeight;
    // formula para calcular lo que el container de todos los skill se tiene que escrolear para arriba
    const scrollingContainerSkillBar = (skillSectionHeigth - skillsContainerBarHeigth) - (skillSectionHeigth / 6)
    // contenedor de la seccion experiencia
    const experiencias = this.elementRef.nativeElement.querySelector('.experiencias');
    // Obtén todos los elementos secundarios dentro del contenedor experiencia
    const experiencia = experiencias.querySelectorAll('.experiencia');
    
    // ANIMACIONES PARA PANTALLAS DE ESCRITOIOS
    mm.add("(min-width: 801px)", (context) => {
      // Crear una única línea de tiempo
    this.tl = gsap.timeline({
      scrollTrigger: {
          trigger: ".cuadro_padre",
          markers: false,
          start: "top top",
          end: "+=9000vh",
          scrub: true,
          pin: true
      }
    });
      
    const header_texto_nombre = gsap.to(".header .texto_nombre p", { y: "-100%", duration: 1 , opacity:0});
    const header_texto_profesion = gsap.to(".header .texto_profesion p", { y: "-100%", duration: 1 });
    const header_div_nombre = gsap.to(".header .texto_nombre", {top:"0%", y: "-100%", duration: 1 });
    const header_div_profesion = gsap.to(".header .texto_profesion", {top:"0%", y: "-100%", duration: 1 });
    const header_img = gsap.to(".img_header", {left:"-100px" , x: "0%", y:"0%", duration: 1 , scale:1, });
    const header_texto_sobre_mi = gsap.to(".header .texto_sobre_mi", {opacity:1, duration: 1,  });
    // const header = gsap.to(".header", {y:"-100%", duration: 1, ease:"power1.out", onComplete:()=>{this.animacionBarrasSkill()} });
    const header = gsap.to(".header", {y:"-100%", duration: 2 });
    const container_skill_bar = gsap.to(".container-skill-bar", { duration:4, y:scrollingContainerSkillBar})
    const container_skill_info = gsap.to(".container-skill-info", { duration:1, y:'-50%', top:'50%', opacity:1});
    const skills_section = gsap.to(".skills-section", {opacity:0, duration:6, x:"-90%"});
    const cuadro_hijo2 = gsap.to(".cuadro_hijo2", { duration: 4, right: "0%" });
    const img_header_hijo2 = gsap.to(".img_header_hijo2", { duration:2, top:"-100%"});
    const subhijo_cuadro_hijo2 = gsap.to(".subhijo_cuadro_hijo2", { duration:6, y:"0px"});
    
    this.tl.add(header_texto_nombre, 0)
    this.tl.add(header_texto_profesion, 0)
    this.tl.add(header_img, 1)
    this.tl.add(header_texto_sobre_mi, 1)
    this.tl.add(header_div_nombre, 1.5)
    this.tl.add(header_div_profesion, 1.5)
    this.tl.add(header, 2.5) //header sube
    this.tl.add(container_skill_info,3.5) // texto info skill sube al centro
    this.tl.add(container_skill_bar,3)
    

    this.containerSkillBar.forEach((container)=> {
        const innerSkills = container.nativeElement.querySelectorAll('.contenedor-porcentage');
        innerSkills.forEach((innerSkill: HTMLElement, index:number) => {
          this.delay = 1.8 + index * 0.05
          const a = gsap.from(innerSkill, {width:0, duration:.3, delay:this.delay, opacity:0});
          this.tl.add(a, this.delay);
      });
    });
    
    // Aquí agregamos las animaciones de skills_section y cuadro_hijo2 sin utilizar ">+1"
    this.tl.add([skills_section,cuadro_hijo2], ">+1"); // Ajustamos el tiempo basado en la última animación
    this.tl.add( [img_header_hijo2, subhijo_cuadro_hijo2], ">");

    // Recorro los elementos secundarios y aplica animaciones
    experiencia.forEach((element: gsap.TweenTarget, index: number) => {
      this.delay = 11.8 + index * 0.5
        const a = gsap.to(element, {y:'0vh', duration: 2,  delay:index * 0.01}); // Retraso para que las animaciones se ejecuten de manera escalonada
        this.tl.add(a, this.delay);
      });
    });





































































    // ANIMACIONES PARA PANTLLAS DE MOVILES
    mm.add("(max-width: 800px)", (context) => {
      // Crear una única línea de tiempo
    this.tl = gsap.timeline({
      scrollTrigger: {
          trigger: ".cuadro_padre",
          markers: false,
          start: "top top",
          end: "+=4000vh",
          scrub: true,
          pin: true
      }
    });
      
      
      const header_texto_nombre = gsap.to(".header .texto_nombre p", { y: "-100%", duration: 1 , opacity:0});
      const header_texto_profesion = gsap.to(".header .texto_profesion p", { y: "-100%", duration: 1 });
      const header_img = gsap.to(".img_header", {height:'70vh',left:'-120px',  x: "0%", y:"-30%", duration: .5 , scale:1});
      const header_texto_sobre_mi = gsap.to(".header .texto_sobre_mi", {opacity:1, duration: .5});
      const header = gsap.to(".header", {y:"-100%", duration: 1});
      const skills_section_ani_1 = gsap.to(".skills-section", { duration: .5, opacity:1});
      const skills_section_ani_2 = gsap.to(".skills-section", { duration: 4,  y:'-70%', top:'0%'});

      // const container_skill_info_ani1 = gsap.to(".container-skill-info", {opacity:1, duration:1});
      // const container_skill_info_ani2 = gsap.to(".container-skill-info", {opacity:1, duration:2,top:'0%'});
      // const skill_bar = gsap.to(".skill-bar", { opacity:1, duration:.5});
      // const container_skill_bar = gsap.to(".container-skill-bar", { duration: 1, delay:1});
      
      // const skills_container_move_left = gsap.to(".skills", { x: "-100%", duration:5, opacity:0});
      // const b3 = [skills_container_move_left , cuadro_hijo2]
      // const img_header_hijo2 = gsap.to(".img_header_hijo2", { duration:1, top:"-100%", ease:"power1.in" });
      // const subhijo_cuadro_hijo2 = gsap.to(".subhijo_cuadro_hijo2", { duration:1, y:"0%"});
      // const c3 = [subhijo_cuadro_hijo2, img_header_hijo2, ]

      // INTERNTTAR QUE LA ANIMACION DE LAS BARRAS HAVIA LA IZQUIERDA NO ALLA UN CORTE CON LA ANIMACION DE LA IMAGEN SIGUIENTE

      
      this.tl.add(header_texto_nombre, 0)
      this.tl.add(header_texto_profesion, 0)
      this.tl.add(header_img, 1) // sube foto
      this.tl.add(header_texto_sobre_mi, 1.1) // aparece texto
      this.tl.add(header, 2) //header sube
      this.tl.add([skills_section_ani_1, skills_section_ani_2], 2.4)
      // this.tl.add(container_skill_info_ani2, 2)
      // // this.tl.add([container_skill_bar], 1.5) 
      // this.tl.add([skills_container, skill_bar], 3.8)
      
      

      this.containerSkillBar.forEach((container)=> {
        const innerSkills = container.nativeElement.querySelectorAll('.contenedor-porcentage');
        innerSkills.forEach((innerSkill: HTMLElement, index:number) => {
          this.delay = 1.4 + index * 0.04
          const a = gsap.from(innerSkill, {width:0, duration:.3, delay:this.delay, opacity:0});
          this.tl.add(a, this.delay);
      });
    });








      // this.tl.add(b3, ">"); // skills mueve a la izquierda y cuadro_hijo2 mueve a la izquierda
      // this.tl.add(c3, ">");
      

      // // Recorro los elementos secundarios y aplica animaciones
      // experiencia.forEach((element: gsap.TweenTarget, index: number) => {
      //   const a = gsap.to(element, {y: 0, duration: 1, ease:"power2.out", delay: index * 0.1}); // Retraso para que las animaciones se ejecuten de manera escalonada
      //   this.tl.add(a, ">-.5");
      // });

      // this.tl.add(subhijo_cuadro_hijo2_subir, ">");
    })

  }

  // aqui se anima el backgrund y el texto de las barra de los skill
  animacionBarrasSkill(){
    // console.log(this.skills_data[0].img[0].porcentage)
    const skill = this.elementRef.nativeElement.querySelectorAll('.skill');
    skill.forEach((element: Element, index: number) => {
      const data_skill = this.skills_data[index]
      const childElement = element.querySelectorAll('.inner-skill .circle2')
      childElement.forEach((childElement: Element, index: number) =>{
        
        const porcentage = data_skill.img[index].porcentage
        gsap.to(childElement, {
                duration:3,
                strokeWidth:'5',
                fill: 'none',
                strokeDasharray:`${(porcentage)} ${100 - porcentage}`,
                delay: index * 0.05// Retraso para que las animaciones se ejecuten de manera escalonada
              });
      })
    });
  } 
}