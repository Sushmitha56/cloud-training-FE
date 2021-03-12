import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class TokenService implements HttpInterceptor{
    constructor(){}

    intercept(req: any, next: any): any {
        const tokenizedReq =req.clone({
            setHeaders:{ 'Authorization':`Bearer ${sessionStorage.getItem('authToken')}`
        }
        })
        return next.handle(tokenizedReq);
    }
}