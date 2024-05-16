import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Credentials } from '../MODELS/Credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(creds:Credentials){
    return this.http.post('https://localhost:7016/api/Authentication/Validar', creds,{
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>)=>{
      const body = response.body;
      const headers = response.headers;

      console.log(body.token);
      console.log(body.expires);

      localStorage.setItem('Token', body.token);

      return body;
    }))
  }

  getToken(){
    return localStorage.getItem('Token');
  }
}
