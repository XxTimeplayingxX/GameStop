import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRenderComponent } from './Pages/login-render/login-render.component';

const routes: Routes = [
  {
    path: '',
    component: LoginRenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
