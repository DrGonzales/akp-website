import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BloggerAdapterService } from './share/blogger.adapter.service';
import * as _ from 'lodash';
import { ContentAdapterService } from '../share/content-adapter-service';
import { Section } from '../model/contentInterface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})



export class PortfolioComponent implements OnInit {

  pictures: Array<any> = [];
  sectionContent: Section ;
  picCount = 16;
  result: Array<any> = [];

  constructor(private route: ActivatedRoute,
              private blogerAdapterservice: BloggerAdapterService,
              private content: ContentAdapterService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      const galleryTag = routeParams.portfolio;
      this.content.getContent().subscribe(r => {
        this.sectionContent = r.sections.filter((tag: { gallerytag: string; }) => {
          return tag.gallerytag === galleryTag;
        });
      });
      this.getPicUrl(galleryTag);
    });
  }

  get titel(){
    return (this.sectionContent && this.sectionContent[0].titel) ? this.sectionContent[0].titel : null;
  }

  get longtext(){
    return (this.sectionContent && this.sectionContent[0].longtext) ? this.sectionContent[0].longtext : null;
  }

  // move to a Service
  getPicUrl(protfolio: string) {
    this.blogerAdapterservice.getPictures(protfolio).subscribe((data: any) => {
      const findImageLinks = /(href..)\b(https?:\/\/\S+(?:png|jpe?g|gif)\S*)\b/g;
      const selectRegexGroup = 2;
      const postPrecessImageUrl = str => str.replace('s1600', '$size');
      data.items.forEach(element => (this.getMatches(element.content, findImageLinks, selectRegexGroup, postPrecessImageUrl))
        .forEach(url => this.result.push(this.genEntry(url, 480, 1600, this.titel))));
      this.pictures = _.sampleSize(this.result, this.picCount);
    });
  }

  // move to a Service
  private getMatches(string, regex, index = 1, fn = str => str) {
    const matches = [];
    let match: any[];
    while ( match = regex.exec(string)) {
      matches.push(fn(match[index]));
    }
    return matches;
  }
  // move to a Service
  private genEntry(url: String, thumbsize: number, fullsize: number, titel: string) {
    let src = url.replace('$size', 's' + fullsize);
    let caption = titel;
    let thumb = url.replace('$size', 's' + thumbsize);
    return {
      src,
      caption,
      thumb
    };
  }
}
