import { Component, OnInit } from '@angular/core';
import { ContentAdapterService } from 'src/app/share/content-adapter-service';
import * as _ from 'lodash';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sectionlist-component',
  templateUrl: './sectionlist-component.component.html',
  styleUrls: ['./sectionlist-component.component.scss']
})
export class SectionlistComponentComponent implements OnInit {
  sectioncontent: any = [];
  buttonIcon = faLink;
  constructor(private content: ContentAdapterService){}
  ngOnInit(): void {
    this.content.getContent().subscribe( values => this.sectioncontent = values );
  }
}
