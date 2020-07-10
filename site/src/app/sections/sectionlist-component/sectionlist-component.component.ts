import { Component, OnInit } from '@angular/core';
import { ContentAdapterService } from 'src/app/share/content-adapter-service';
import * as _ from 'lodash';

@Component({
  selector: 'app-sectionlist-component',
  templateUrl: './sectionlist-component.component.html',
  styleUrls: ['./sectionlist-component.component.scss']
})
export class SectionlistComponentComponent implements OnInit {
  sectioncontent: any = [];

  constructor(private content: ContentAdapterService){}
  ngOnInit(): void {
    this.content.getContent().subscribe( r => this.sectioncontent = r );
  }
}
