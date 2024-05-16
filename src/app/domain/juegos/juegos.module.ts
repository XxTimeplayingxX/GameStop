import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import {JuegoComponent} from './components/juego/juego.component';
import {JuegosRenderComponent} from './Pages/juegos-render/juegos-render.component'
import { NavbarComponentComponent } from '../shared/navbar/navbar-component/navbar-component.component';

@NgModule({
  declarations: [
    JuegoComponent,
    JuegosRenderComponent,
    NavbarComponentComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
