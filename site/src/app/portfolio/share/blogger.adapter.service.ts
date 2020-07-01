import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class BloggerAdapterService {
  //  url = 'https://www.googleapis.com/blogger/v3/blogs/645477939881106143/posts/search?q=label:Couple|label:TFP&max-results=50&key=AIzaSyD3h5-cgCmihqtpHSSQpOsob71RPWoa0DY'
  
    constructor(private http: HttpClient){}

    getPictures(portfolio: string){
      console.log(portfolio);
        const url = `https://www.googleapis.com/blogger/v3/blogs/645477939881106143/posts/search?q=label:${portfolio}&max-results=50&key=AIzaSyD3h5-cgCmihqtpHSSQpOsob71RPWoa0DY`;      
        return this.http.get(url);
    }
}
