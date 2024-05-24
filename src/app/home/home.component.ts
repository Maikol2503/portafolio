import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import Splide from '@splidejs/splide';
import { Router, RouterLink } from '@angular/router';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { ScrollTrigger } from 'gsap/all';
import { DataService } from '../data.service';

interface Slide {
  id:number
  archivo: string;
  texto1: string;
  texto2: string;
  link?: string;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, AfterViewInit {

  list_projects:any = []
  
  constructor(private router: Router, private data_services:DataService) {}
  ngOnInit() {
    this.list_projects = this.data_services.proyectos_destacados()
  }

  ngAfterViewInit() {
    this.scroll_atomatico()
    window.scrollTo(0, 0);
    window.resizeBy(0, -2000);
    
    var scrollableLength = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(scrollableLength)
   
  }
 

  @ViewChild("slaider") slaider!:ElementRef
  @ViewChild("cards", { static: false }) cards!:ElementRef
  @ViewChild("card") card!:ElementRef
  @ViewChild("p1") p1!:ElementRef
  @ViewChild("p2") p2!:ElementRef
  @ViewChild("segundo_cuadro_texto") segundo_cuadro_texto!:ElementRef
  @ViewChild("p3") p3!:ElementRef
  @ViewChild("card_img") card_img!:ElementRef
  @ViewChild("apellido_texto") apellido_texto!:ElementRef
  @ViewChild("portafolio_texto") portafolio_texto!:ElementRef
  @ViewChild("profesion_texto") profesion_texto!:ElementRef

  boleano = false
  cursorOver = false
  texto1:any
  texto2:any
  id_slide:any = 0

  // slides: Slide[] = [ 
                      
  //                     {'id':0, 'archivo':'https://i.imgur.com/Ifzacz3.png', 'texto1':'Conecta X' , 'texto2':'FRONTEND' , 'link':'https://maikol2503.github.io/Juego-conecta-X/'},
  //                     {'id':1, 'archivo':'https://i.imgur.com/qTC9TpS.png', 'texto1':'Group generator' , 'texto2':'FRONTEND' , 'link':'https://maikol2503.github.io/GeneradorDeGrupos/'},
  //                     {'id':2, 'archivo':'https://i.imgur.com/mMKogfm.png', 'texto1':'Afrobook' , 'texto2':'FRONTEND' , 'link':'https://afrodbook.000webhostapp.com/FRONTEND/index.html'},
  //                     {'id':3, 'archivo':'https://i.imgur.com/bjTtoEK.png', 'texto1':'Danza Fenix' , 'texto2':'BACKEND' , 'link':'https://even-fireplace-782.notion.site/Fenix-Api-d3a1d099b0f04c628d3639338472dffa'},
  //                     {'id':4, 'archivo':'https://i.imgur.com/qwcViBn.png', 'texto1':'Magica' , 'texto2':'BACKEND' , 'link':'https://github.com/ispipa/Majica-Project'}
  //                   ];





  //animacion de los titulos
  animar_titulo(){
    //sube

    let duracion = .5
    if(this.cursorOver){
      gsap.to(this.p1.nativeElement, {duration:duracion , y:"-100%", ease: 'power4.inOut', delay: 0 })
      gsap.to(this.segundo_cuadro_texto.nativeElement, {duration:duracion , bottom:"0%" ,ease: 'power4.inOut', delay: 0 })
      gsap.to(this.p2.nativeElement, {duration:duracion , y:"0%", ease: 'power4.inOut', delay: .1 })
      gsap.to(this.p3.nativeElement, {duration:duracion , bottom:"0%", ease: 'power4.inOut', delay: 0 })
      gsap.to(this.apellido_texto.nativeElement, {duration:duracion , y:"-100%", ease: 'power4.inOut', delay: 0 })
      gsap.to(this.profesion_texto.nativeElement, {duration:duracion , y:"-100%", ease: 'power4.inOut', delay: .1 })
      gsap.to(this.portafolio_texto.nativeElement, {duration:duracion , y:"-100%", ease: 'power4.inOut', delay: .1 })

    } else if(!this.cursorOver){
      gsap.to(this.p1.nativeElement, {duration:duracion , y:"0%", ease: 'power4.inOut', delay: 0 })
      gsap.to(this.segundo_cuadro_texto.nativeElement, {duration:duracion , bottom:"-100%" ,ease: 'power4.inOut', delay: 0 })
      gsap.to(this.p2.nativeElement, {duration:duracion , y:"100%", ease: 'power4.inOut', delay: 0})
      gsap.to(this.p3.nativeElement, {duration:duracion , bottom:"0%", ease: 'power4.inOut', delay: 0 })
      gsap.to(this.apellido_texto.nativeElement, {duration:duracion , y:"0%", ease: 'power4.inOut', delay: 0 })
      gsap.to(this.profesion_texto.nativeElement, {duration:duracion , y:"0%", ease: 'power4.inOut', delay: 0 })
      gsap.to(this.portafolio_texto.nativeElement, {duration:duracion , y:"0%", ease: 'power4.inOut', delay: 0 })
    }
  }

  

  //evento para detectar cuando el mouse esta encima de la imagen
  onMouseOver(e:MouseEvent) {
    const target = e.target as HTMLElement;

    if (target.tagName === 'IMG') {
      this.id_slide = target.id
      this.cursorOver = true
      this.animar_titulo()
      this.obtener_textos_del_array(this.id_slide)
      this.aplicarEstilos(this.id_slide)
      
    }
  }


  //Para detectar el evento cuando el mouse sale del slide
  onMouseOut(e:MouseEvent){
    console.log("salio")
    this.cursorOver = false
    this.animar_titulo()
    this.quitarEstilos()
  }


  // obtengo el id del slide y extraigo su link, para que
  // cuando le den click al slide redireccione al proyecto
  redirectToSlide() {
    let link = this.list_projects[this.id_slide].link
    window.open(link, '_blank');
  }
  
  // obtengo el texto o descripcion del array por su id
  obtener_textos_del_array(id:number){
    this.texto1 = this.list_projects[this.id_slide]?.texto1
    this.texto2 = this.list_projects[this.id_slide]?.texto2
  }


  //aplico los estilos a los slides
  aplicarEstilos(id: number) {
    const slides: any = document.querySelectorAll('.img');
    slides.forEach((slide: any) => {
      if (slide.id === id.toString()) {
        // No aplicar estilo al elemento con el ID proporcionado
        slide.style.opacity = '1';
        slide.style.scale = '0.9'
      } else {
        // Aplicar estilo a los demás elementos
        slide.style.opacity = '0.4';
      }
    });
  }


  //reinicio los estilos de los slides
  quitarEstilos(){
    const slides: any = document.querySelectorAll('.img');
    //Volver a aplicar los estilos anteriores
    slides.forEach((slide: any) => {
        slide.style.opacity = '1';
        slide.style.scale = '1'
    });
  }


  //Configuracion del slider automatico
  scroll_atomatico(){
    const splideOptions:any = {
      type   : 'loop',
      arrows: false,
      drag   : true,
      perMove: 1,
      perPage: 3,
      wheel: true,
      pagination:false,
      autoScroll: {
        speed: 0.3, //velocidad del autoscroll
      },
    };

    const splide = new Splide( '.splide1', splideOptions );
    splide.mount({AutoScroll});
  }


}