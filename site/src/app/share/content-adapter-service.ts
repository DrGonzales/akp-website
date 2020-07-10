import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContentAdapterService {
   constructor(private http: HttpClient){}
    getContent(): Observable<any>{
      const url = 'assets/content.json';
      return this.http.get(url);
    }
}
