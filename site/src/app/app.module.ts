import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentAdapterService } from './share/content-adapter-service';
import { PortfolioModule} from './portfolio/portfolio.module';
import { SectionsModule} from './sections/sections.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


import { featureStateName, ContentLoadingEffects, contentloadingReducers } from './store';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(featureStateName, contentloadingReducers ), //in feature auslagern.
    EffectsModule.forFeature([ ContentLoadingEffects ]),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    PortfolioModule,
    SectionsModule
  ],
  providers: [ContentAdapterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
