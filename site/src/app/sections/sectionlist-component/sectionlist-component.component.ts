import { Component, OnInit } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Sections } from 'src/app/model/contentInterface';
import { Observable } from 'rxjs';
import { ContentLoaderState, getContentSelector } from '../../store';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sectionlist-component',
  templateUrl: './sectionlist-component.component.html',
  styleUrls: ['./sectionlist-component.component.scss']
})
export class SectionlistComponentComponent implements OnInit {
  sectionContent$: Observable<Array<Sections>>;
  buttonIcon = faLink;

  constructor(private store: Store<ContentLoaderState>,
    private route: Router) { }

  ngOnInit(): void {
    console.log(this.route.url);
 
    this.sectionContent$ = this.store.select(getContentSelector);
  }

}
