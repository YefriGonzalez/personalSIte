import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpStatusCode,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {


  constructor(private router:Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                if (error.status === HttpStatusCode.Conflict) {
                    this.Toast.fire({ icon: 'error', title:error.error.message })
                    console.clear();
                    return throwError(() => new Error(error.error.message));
                }
                if (error.status === HttpStatusCode.BadRequest) {
                    this.Toast.fire({ icon: 'error', title:error.error.message })
                    console.clear();
                    return throwError(() => new Error(error.error.message));
                }
                if (error.status === HttpStatusCode.NotFound) {
                    this.Toast.fire({ icon: 'error', title: error.error.message })
                    this.router.navigateByUrl('home');
                    console.clear();
                    return throwError(() => new Error(error.error.message));
                    
                }
                if (error.status === HttpStatusCode.Unauthorized) {
                    if( error.error.message !='Unauthenticated.'){
                        this.Toast.fire({ icon: 'error', title: error.error.message })
                    }
                    console.clear();
                    return throwError(() => new Error(error.error.message));
                    
                }
                this.Toast.fire({ icon: 'error',title:"Oops, ha ocurrido un error, intentelo de nuevo"})
                return throwError(() => new Error(error.error.message));
            })
        );
    }
    Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
}
