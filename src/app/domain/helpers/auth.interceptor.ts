import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from '../services/login.service';


export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const myToken = localStorage.getItem('Token');
  const cloneRequest = req.clone({
    setHeaders:{
      Authorization: `Bearer ${myToken}`
    }
  });
  

  return next(cloneRequest);
};
