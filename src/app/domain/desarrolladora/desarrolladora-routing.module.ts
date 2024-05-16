import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableRenderComponent } from './pages/table-render/table-render.component';

const routes: Routes = [
  {
    path: '',
    component: TableRenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesarrolladoraRoutingModule { }
