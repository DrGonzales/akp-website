import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentAdapterService } from './share/content-adapter-service';

import { PortfolioModule} from './portfolio/portfolio.modul';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    PortfolioModule,
    FontAwesomeModule
  ],
  providers: [ContentAdapterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
