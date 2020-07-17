import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LightboxModule } from 'ngx-lightbox';
import { GalleryComponent } from './gallery/gallery.component';

import { PortfolioComponent } from './portfolio.component';
import { PortfoliocontentComponent } from './portfoliocontent/portfoliocontent.component';
import { PortfoliofooterComponent } from './portfoliofooter/portfoliofooter.component';

import { BloggerAdapterService } from './share/blogger.adapter.service';
import { ErrorpageComponent } from '../errorpage/errorpage.component';

@NgModule({
    imports: [
      CommonModule,
      LightboxModule,
      RouterModule
    ],
    declarations: [
        GalleryComponent,
        PortfolioComponent,
        PortfoliocontentComponent,
        PortfoliofooterComponent,
        ErrorpageComponent
    ],
    providers: [BloggerAdapterService ],
  })
  export class PortfolioModule { }
