import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class BloggerAdapterService {

  constructor(private http: HttpClient) { }

  getPictures(portfolio: string) {
    const url = `https://www.googleapis.com/blogger/v3/blogs/645477939881106143/posts/search?q=label:${portfolio}&maxResults=5&key=AIzaSyD3h5-cgCmihqtpHSSQpOsob71RPWoa0DY`;
   
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getnexPage(nextpagetoken: string) {
    const url = `https://www.googleapis.com/blogger/v3/blogs/645477939881106143/posts/?key=AIzaSyD3h5-cgCmihqtpHSSQpOsob71RPWoa0DY&pageToken=${nextpagetoken}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.error('wir haben ein Problem:', error.error.message);
    return throwError('wir haben ein Problem');
  }
}
