import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 404) {
        router.navigate(['/not-found']);
      } else if (error.status === 500) {
        router.navigate(['/server-error']);
      }
      throw error;
    })
  );
};
