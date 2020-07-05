import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ngx-lightbox';
import { GalleryComponent } from './gallery/gallery.component';

import { PortfolioComponent } from './portfolio.component';
import { PortfoliocontentComponent } from './portfoliocontent/portfoliocontent.component';
import { PortfoliofooterComponent } from './portfoliofooter/portfoliofooter.component';

import { BloggerAdapterService } from './share/blogger.adapter.service';

@NgModule({
    imports: [
      CommonModule,
      LightboxModule,
    ],
    declarations: [
        GalleryComponent,
        PortfolioComponent,
        PortfoliocontentComponent,
        PortfoliofooterComponent
    ],
    providers: [BloggerAdapterService ],
  })
  export class PortfolioModule { }