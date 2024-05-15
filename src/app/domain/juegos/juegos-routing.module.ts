import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosRenderComponent } from './Pages/juegos-render/juegos-render.component';

const routes: Routes = [
  {
    path: '',
    component: JuegosRenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
