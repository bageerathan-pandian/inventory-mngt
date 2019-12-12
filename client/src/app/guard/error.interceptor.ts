import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    presentErrorAlert(code){
      console.log(code)
      // this.confirmationService.confirm({
      //   message: code,
      //   accept: () => {
      //       //Actual logic to perform a confirmation
      //   }
      // });
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
          console.log('err.status',err.status);
            if (err.status === 401) {
                // 401 - unauthoried access
                this.authService.logOut(); // auto logout
            }else if (err.status === 404 || err.status === 405 || err.status === 500 || err.status === 0) {
                // 404 - page not found
                // 405 - method not allowed
                // 500 - internal server error
                // 0   - timing out   
                this.presentErrorAlert(err.status);
            }
            
           
            const error = err.error.message || err.statusText;
            return throwError(err);
        }))
    }
}