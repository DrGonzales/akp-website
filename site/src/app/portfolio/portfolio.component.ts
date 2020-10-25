import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BloggerAdapterService } from './share/blogger.adapter.service';
import * as _ from 'lodash';
import { ContentAdapterService } from '../share/content-adapter-service';
import { Card } from '../model/contentInterface';
import { faHome } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})



export class PortfolioComponent implements OnInit {

  pictures: Array<string> = [];

  cardContent: Card;
  picCount = 12;
  result: Array<any> = [];
  homeIcon = faHome;

  constructor(private route: ActivatedRoute,
    private blogerAdapterservice: BloggerAdapterService,
    private contentservice: ContentAdapterService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {

      const tag = routeParams.portfolio;
      const section = routeParams.section;
      this.contentservice.getContent().subscribe(result => {
        this.cardContent = result.galleryContent.filter(sec => sec.tag === section)[0]?.cards.filter(ca => ca.tag === tag)[0];
        this.getPicUrl(_.sample(this.cardContent.blogger));
      });
    });
  }


  // move to a Service
  getPicUrl(protfolio: string) {
    this.blogerAdapterservice.getPictures(protfolio).subscribe((data: any) => {
      const findImageLinks = /(href..)\b(https?:\/\/\S+(?:png|jpe?g|gif)\S*)\b/g;
      const selectRegexGroup = 2;
      const postPrecessImageUrl = str => str.replace('s1600', '$size');
      if (data && data.items) {
        data.items.forEach(element => (this.getMatches(element.content, findImageLinks, selectRegexGroup, postPrecessImageUrl))
          .forEach(url => this.result.push(this.genEntry(url, 480, 1600, this.cardContent.titel))));
        this.pictures = _.sampleSize(this.result, this.picCount);
      } else {
        this.pictures = null;
      }
    });
  }

  // move to a Service
  private getMatches(string, regex, index = 1, fn = str => str) {
    const matches = [];
    let match: any[];
    while (match = regex.exec(string)) {
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
