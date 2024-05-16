import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesarrolladoraRoutingModule } from './desarrolladora-routing.module';
import { TableComponentComponent } from './component/table-component/table-component.component';
import { TableRenderComponent } from './pages/table-render/table-render.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableComponentComponent,
    TableRenderComponent
  ],
  imports: [
    CommonModule,
    DesarrolladoraRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DesarrolladoraModule { }
