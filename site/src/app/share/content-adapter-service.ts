import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sections } from '../model/contentInterface';


@Injectable()
export class ContentAdapterService {

  constructor(private http: HttpClient) { }
  getContent() {
    const url = 'assets/content.json';
    return this.http.get<Sections[]>(url);
  }

 //todo : getCard(name: string){}
}
