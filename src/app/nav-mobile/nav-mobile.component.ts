import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.css']
})
export class NavMobileComponent {

  
  rutaActiva: string = '';

  constructor(private router: Router) {
    // Suscribe a los eventos de navegación para rastrear la ruta activa
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.rutaActiva = event.url;
        // Obtiene la ruta activa actual
      }
    });
  }

}
