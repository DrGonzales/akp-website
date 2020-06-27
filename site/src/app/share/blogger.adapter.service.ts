import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class BloggerService {
  //  url = 'https://www.googleapis.com/blogger/v3/blogs/645477939881106143/posts/search?q=label:Couple|label:TFP&max-results=50&key=AIzaSyD3h5-cgCmihqtpHSSQpOsob71RPWoa0DY'
  url = 'https://www.googleapis.com/blogger/v3/blogs/645477939881106143/posts/search?q=label:Couple&max-results=50&key=AIzaSyD3h5-cgCmihqtpHSSQpOsob71RPWoa0DY'
    constructor(private http: HttpClient){}

    getPictures(){
        return this.http.get(this.url);
    }
}
