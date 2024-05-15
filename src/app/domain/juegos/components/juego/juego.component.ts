import { Component, OnInit } from '@angular/core';
import { videojuego } from '../../../MODELS/videojuego.models';
import { GamesService } from '../../../services/games.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent implements OnInit{
  videoJuegos = <videojuego[]>[];

  constructor(private videojuegoService: GamesService){}

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.videojuegoService.getData().subscribe((data)=>{
      this.videoJuegos = data.data;
      console.log(this.videoJuegos);
    })
  }
}
