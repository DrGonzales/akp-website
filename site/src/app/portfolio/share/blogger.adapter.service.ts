import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class BloggerAdapterService {

  constructor(private http: HttpClient){}

    getPictures(portfolio: string){
      console.log(portfolio);
      const url = `https://www.googleapis.com/blogger/v3/blogs/645477939881106143/posts/search?q=label:${portfolio}&max-results=50&key=AIzaSyD3h5-cgCmihqtpHSSQpOsob71RPWoa0DY`;      
      return this.http.get(url).pipe(
          catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse){
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      return throwError('Something bad happened; please try again later.');
    }
}
