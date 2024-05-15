import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {enviroment} from './../enviroment/enviroment'

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(`${enviroment.API_URL}/Videojuego`)
  }
}
