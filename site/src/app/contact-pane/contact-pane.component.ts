import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContactConfig } from '../model/contentInterface';
import { ContentLoaderState, getContactConfigSelector } from '../store';


@Component({
  selector: 'app-contact-pane',
  templateUrl: './contact-pane.component.html',
  styleUrls: ['./contact-pane.component.scss']
})
export class ContactPaneComponent implements OnInit {
  contactconfig$: Observable<ContactConfig>;
  constructor(private store: Store<ContentLoaderState>) { }

  ngOnInit(): void {
    this.contactconfig$ = this.store.select(getContactConfigSelector);
  }
}

