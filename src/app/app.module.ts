import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { AboutComponent } from './about/about.component';
import { NavMobileComponent } from './nav-mobile/nav-mobile.component';
import { PruebaScrollComponent } from './prueba-scroll/prueba-scroll.component';
import { ContactosComponent } from './contactos/contactos.component';



@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    HomeComponent,
    NavComponent,
    ProyectosComponent,
    PreloaderComponent,
    AboutComponent,
    NavMobileComponent,
    PruebaScrollComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
