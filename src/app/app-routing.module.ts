import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PruebaComponent } from './prueba/prueba.component';
import { RouterModule, Routes } from '@angular/router';  // Agrega esta importación
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AboutComponent } from './about/about.component';
import { ContactosComponent } from './contactos/contactos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  // Agrega RouterModule.forRoot con tus rutas
  ],
  exports: [RouterModule]  // Agrega esta línea para exportar RouterModule
})
export class AppRoutingModule { }