import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import {JuegoComponent} from './components/juego/juego.component';
import {JuegosRenderComponent} from './Pages/juegos-render/juegos-render.component'

@NgModule({
  declarations: [
    JuegoComponent,
    JuegosRenderComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
