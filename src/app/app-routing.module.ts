import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PruebaComponent } from './prueba/prueba.component';
import { RouterModule, Routes } from '@angular/router';  // Agrega esta importación
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: PruebaComponent },
  { path: 'proyectos', component: ProyectosComponent },
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