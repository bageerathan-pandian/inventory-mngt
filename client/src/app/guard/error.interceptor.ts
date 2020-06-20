import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retryWhen, map, tap, delay, take } from 'rxjs/operators';
import { AuthLoginService } from '../shared/auth.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthLoginService) { }
   

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
                // retry(3), // retry the failed request up to 3 times
                // catchError(err => this.errorHandler(err)),
                retryWhen(res => res.pipe(
                    map((err, index) => {
                        console.log(index)
                        if (index === 2) {
                            this.errorHandler(err)
                        }
                    }),
                    tap(() => console.log('retrying...')),
                    delay(1000),
                    take(3)
                ))
            )
           
    }

    private errorHandler(error: HttpEvent<any>): Observable<HttpEvent<any>> {
        if (error instanceof HttpErrorResponse) {
            switch (error.status) {
                case 401:
                    this.authService.logOut();
                    location.reload(true);
                    break;
                // case 500:
                    // this.toastr.warning(error.statusText)
                default:
                    // this.toastr.warning(error.statusText)
                    break;

            }
            return throwError(error);
        }
    }
}