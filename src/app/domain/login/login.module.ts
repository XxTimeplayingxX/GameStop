import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {LoginComponentComponent} from './Component/login-component/login-component.component'
import { LoginRenderComponent } from './Pages/login-render/login-render.component';


@NgModule({
  declarations: [
    LoginComponentComponent,
    LoginRenderComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
