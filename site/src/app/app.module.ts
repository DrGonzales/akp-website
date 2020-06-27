import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { GalleryComponent } from './portfolio/gallery/gallery.component';
import { BloggerAdapterService } from './portfolio/share/blogger.adapter.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfoliocontentComponent } from './portfolio/portfoliocontent/portfoliocontent.component';
import { PortfoliofooterComponent } from './portfolio/portfoliofooter/portfoliofooter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PortfolioComponent,
    PortfoliocontentComponent,
    PortfoliofooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    LightboxModule,
    FontAwesomeModule
  ],
  providers: [BloggerAdapterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
