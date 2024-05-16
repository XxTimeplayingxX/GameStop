import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.css'
})
export class NavbarComponentComponent {
  constructor(
    private router:Router
  ){}

  moveToDesarrolladoraTable(){
    this.router.navigate(['/DesarrolladoraDashboard']);
  }
}
