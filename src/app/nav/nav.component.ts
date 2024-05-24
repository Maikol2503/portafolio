import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  rutaActiva: string = ''; // Asegúrate de que la ruta activa inicial sea una cadena vacía

  constructor(private router: Router) {
    // Suscribe a los eventos de navegación para rastrear la ruta activa
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.rutaActiva = event.url;
        // Obtiene la ruta activa actual
      }
    });
  }

  
  // iconos
  // home_icono = faHome
  // about_icono = faAddressCard
  // proyectos_icono = faBriefcase
  // skill_icono = faCode
  // gitHub_icono = faGithub
  // linkedin_icono = faLinkedin
  // email_icono = faEnvelope

  home_icono = 'home'
  about_icono = 'about'
  proyectos_icono = 'proyectos'
  skill_icono = 'skills'
  gitHub_icono = 'git'
  linkedin_icono = 'linkadin'
  email_icono = 'email'

}
