import { Component, OnInit } from '@angular/core';
import { ContentAdapterService } from 'src/app/share/content-adapter-service';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Sections } from 'src/app/model/contentInterface';

@Component({
  selector: 'app-sectionlist-component',
  templateUrl: './sectionlist-component.component.html',
  styleUrls: ['./sectionlist-component.component.scss']
})
export class SectionlistComponentComponent implements OnInit {
  sectionContent: Sections[];
  buttonIcon = faLink;

  constructor(private contentservice: ContentAdapterService) { }

  ngOnInit(): void {
    this.contentservice.getContent().subscribe(result => {
      this.sectionContent = result;
    });
  }

}
