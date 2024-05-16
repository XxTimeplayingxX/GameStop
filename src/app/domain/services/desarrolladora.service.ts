import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviroment';
import { NombreDesarrolladora } from '../MODELS/videojuego.models';

@Injectable({
  providedIn: 'root'
})
export class DesarrolladoraService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    debugger;
    return this.http.get<any>(`${enviroment.API_URL}/Desarrolladora`);
  }

  postData(desarrolladora:NombreDesarrolladora):Observable<any>{
    console.log(desarrolladora);
    return this.http.post(`${enviroment.API_URL}/Desarrolladora`, desarrolladora);
  }
}
