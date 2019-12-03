import { HttpInterceptor, HttpRequest, HttpHandler} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());

        if (this.auth.isLogedIn()) {
           
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('secret_token'))
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
