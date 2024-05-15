import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {LoginComponentComponent} from './Component/login-component/login-component.component'
import { LoginRenderComponent } from './Pages/login-render/login-render.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponentComponent,
    LoginRenderComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class LoginModule { }
