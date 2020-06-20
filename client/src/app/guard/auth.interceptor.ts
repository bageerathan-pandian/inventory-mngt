import { HttpInterceptor, HttpRequest, HttpHandler} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthLoginService } from "../shared/auth.service";
import { SessionService } from '../shared/session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router,public sessionService: SessionService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());

        if (this.sessionService.getItem('inventryLogedIn')) {
           
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.sessionService.getItem('secret_token'))
            });
            return next.handle(clonedreq)
            // .do(
            //     succ => { },
            //     err => {
            //         if (err.status === 401)
            //             this.router.navigateByUrl('/login');
            //     }
            // );
        }
        // Not logged in. Continue without modification.
        return next.handle(req);
    }
}
