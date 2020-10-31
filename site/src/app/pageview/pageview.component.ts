import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-pageview',
  templateUrl: './pageview.component.html',
  styleUrls: ['./pageview.component.scss']
})



export class PageviewComponent implements OnInit {
  content$: Observable<string>;
  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.content$ = this.http.get<string>('assets' + this.route.url + '.txt', { responseType: 'text' as 'json'});
  }
}
