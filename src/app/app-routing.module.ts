import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'home',
        loadChildren: ()=>import('./domain/juegos/juegos.module').then(j=>j.JuegosModule)
      }
    ]
  },
  {
    path: '',
    children:[
      {
        path: 'login',
        loadChildren: ()=>import('./domain/login/login.module').then(l=>l.LoginModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
