import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { BloggerAdapterService } from './share/blogger.adapter.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})



export class PortfolioComponent implements OnInit {

  pictures: Array<any> = [];
  picCount = 16;
  galleryTitel = 'Lovegoals';
  result: Array<any> = [];
  shuffleIcon = faRandom;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private blogerAdapterservice: BloggerAdapterService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.getPicUrl(routeParams.portfolio);
    });
  }

  //move to a Service
  getPicUrl(protfolio: string) {
    this.blogerAdapterservice.getPictures(protfolio).subscribe((data: any) => {
      const findImageLinks = /(href..)\b(https?:\/\/\S+(?:png|jpe?g|gif)\S*)\b/g;
      const selectRegexGroup = 2;
      const postPrecessImageUrl = str => str.replace('s1600', '$size');
      data.items.forEach(element => (this.getMatches(element.content, findImageLinks, selectRegexGroup, postPrecessImageUrl))
        .forEach(url => this.result.push(this.genEntry(url, 480, 1600, this.galleryTitel))));
      this.pictures = _.sampleSize(this.result, this.picCount);
    });
  }

  //move to a Service
  private getMatches(string, regex, index = 1, fn = str => str) {
    var matches = [];
    var match;
    while (match = regex.exec(string)) {
      matches.push(fn(match[index]));
    }
    return matches;
  }
  //move to a Service
  private genEntry(url: String, thumbsize: number, fullsize: number, titel: string) {
    var src = url.replace("$size", "s" + fullsize);
    var caption = titel;
    var thumb = url.replace("$size", "s" + thumbsize);
    return {
      src: src,
      caption: caption,
      thumb: thumb
    }
  }

}
