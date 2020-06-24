import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import { BloggerService } from '../share/blogger.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  picurl: Array<String> = [];
  _album: Array<any> = [];
  title = 'site';

  constructor(private _lightbox: Lightbox,
    private _lightboxconfig: LightboxConfig,
    private blogerservice: BloggerService) {

    _lightboxconfig.fitImageInViewPort = true;
    _lightboxconfig.wrapAround = true;
    _lightboxconfig.resizeDuration = 1;
    _lightboxconfig.enableTransition = true;
    _lightboxconfig.showImageNumberLabel = true;

  }


  ngOnInit(): void {
    this.getPicUrl();
  }

  getPicUrl() {
    this.blogerservice.getPictures().subscribe((data: any) => {
      const findImageLinks = /(href..)\b(https?:\/\/\S+(?:png|jpe?g|gif)\S*)\b/g;
      const selectRegexGroup = 2;
      const postPrecessImageUrl = str => str.replace("s1600", "$size");  //sxxxx erstellt Bilder bestimmter größer - s1600 1600px breite
      var result = [];
      data.items.forEach(element => (this.getMatches(element.content, findImageLinks, selectRegexGroup, postPrecessImageUrl)).forEach(element => result.push(this.genEntry(element, 480, 1600, "Portraits Gallery"))));
      this._album = _.sampleSize(result, 16);
    })

  }

  open(index: number): void {
    this._lightbox.open(this._album, index);
  }

  close(): void {
    this._lightbox.close();
  }


  private getMatches(string, regex, index = 1, fn = str => str) {
    var matches = [];
    var match;
    while (match = regex.exec(string)) {
      matches.push(fn(match[index]));
    }
    return matches;
  }

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