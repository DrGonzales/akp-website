import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SectionlistComponentComponent } from './sections/sectionlist-component/sectionlist-component.component';
import { ContentLoadResolver, PortfolioContentLoadResolver } from './resolvers';
import { PageviewComponent } from './pageview/pageview.component';


const routes: Routes = [
  { path: 'sections', component: SectionlistComponentComponent, resolve: {state: ContentLoadResolver} },
  { path: 'portfolio/:section/:portfolio', component: PortfolioComponent, resolve: {state: ContentLoadResolver} },
  { path: 'impressum', component: PageviewComponent },
  { path: 'datenschutz', component: PageviewComponent },
  { path: '**', redirectTo: 'sections', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
