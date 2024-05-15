import { Component } from '@angular/core';
import { Credentials } from '../../../MODELS/Credentials';
import { LoginService } from '../../../services/login.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  creds: Credentials = {
    correo: '',
    clave: ''
  };
  forms: FormGroup;

  constructor(
    private loginService:LoginService,
    private router:Router,
    fb:FormBuilder
  )
  {
    this.forms = fb.group({
      email: '',
      password: ''
    })
  }

  login(form: FormGroup){

    this.creds.correo = form.value.email;
    this.creds.clave = form.value.password;
    console.log(form);
    
    console.log('Form Value:', this.creds);

    this.loginService.login(this.creds)
    .subscribe(respone=>{
      console.log(respone);
      this.router.navigate(['/home']);
    })
  }
}
