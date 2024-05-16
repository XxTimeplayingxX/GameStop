import { Component, OnInit } from '@angular/core';
import { NombreDesarrolladora } from '../../../MODELS/videojuego.models';
import { DesarrolladoraService } from '../../../services/desarrolladora.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent implements OnInit{
  Desarrolladora = <NombreDesarrolladora[]>[];
  desarrolladoraPost = <NombreDesarrolladora[]>[];
  forms : FormGroup;

  constructor(
    private desarrolladoraService:DesarrolladoraService,
    private fb:FormBuilder
  ){
    this.forms = this.fb.group({
      nombre:['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      imagen: ''
    })
  }

  ngOnInit(): void {
    debugger;
    this.getData();
  }

  getData(){
    this.desarrolladoraService.getData().subscribe((data)=>{
      this.Desarrolladora = data.data;
      console.log(this.Desarrolladora);
    })
  }
  postDatos(){
    const datos = JSON.parse(JSON.stringify(this.forms.value));
    console.log(datos);
    this.desarrolladoraService.postData(datos).subscribe(()=>{
      this.forms.reset();
    })
    console.log('Datos enviados');
    this.getData();
  }
  AddedDesarrollador(){
    console.log(this.forms)
  }
}
