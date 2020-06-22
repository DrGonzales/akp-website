import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  _album: Array<any> = [];
  title = 'site';

  constructor(private _lightbox: Lightbox,
    private _lightboxconfig: LightboxConfig) {

    _lightboxconfig.fitImageInViewPort = true;
    _lightboxconfig.wrapAround = true;
    _lightboxconfig.resizeDuration = 1;

    var src = 'https://3.bp.blogspot.com/-S-oJFKx_p58/XOEQWReo5EI/AAAAAAAAF1E/VViaNE3dP28-cDnifS2xwbsOsnd8SuvuQCLcBGAs/s800/DSC_1484-Bearbeitet.jpg';
    var caption = 'Kyra';
    var thumb = 'https://3.bp.blogspot.com/-S-oJFKx_p58/XOEQWReo5EI/AAAAAAAAF1E/VViaNE3dP28-cDnifS2xwbsOsnd8SuvuQCLcBGAs/s160/DSC_1484-Bearbeitet.jpg';
    var album = {
      src: src,
      caption: caption,
      thumb: thumb
    }

    this._album.push(album);
    src = 'https://3.bp.blogspot.com/-C1K87hVsZdA/XOEQOYhnwKI/AAAAAAAAF04/sEoKZL8j23kOx9xeMtixd5U2_SU4DHhWQCLcBGAs/s800/DSC_1463.jpg';
    caption = 'Action!!!';
    thumb = 'https://3.bp.blogspot.com/-C1K87hVsZdA/XOEQOYhnwKI/AAAAAAAAF04/sEoKZL8j23kOx9xeMtixd5U2_SU4DHhWQCLcBGAs/s160/DSC_1463.jpg';
    album = {
      src: src,
      caption: caption,
      thumb: thumb
    }

    this._album.push(album);
  }


  ngOnInit(): void {

  }


  open(index: number): void {

    this._lightbox.open(this._album, index);
  }

  close(): void {

    this._lightbox.close();
  }
}
