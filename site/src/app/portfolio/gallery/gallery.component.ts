import { Component, OnInit, Input } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import * as _ from 'lodash';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent{

  title = 'site';

  @Input() pictures: Array<any>;

  constructor(private lightbox: Lightbox,
              private lightboxconfig: LightboxConfig,
  ) {

    lightboxconfig.fitImageInViewPort = true;
    lightboxconfig.wrapAround = true;
    lightboxconfig.resizeDuration = 0.5;
    lightboxconfig.enableTransition = true;
    lightboxconfig.showImageNumberLabel = true;
  }

  open(index: number): void {
    this.lightbox.open(this.pictures, index);
  }

  close(): void {
    this.lightbox.close();
  }

}
