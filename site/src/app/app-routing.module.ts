import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SectionlistComponentComponent } from './sections/sectionlist-component/sectionlist-component.component';
import { ContentLoadResolver } from './store/contentloading.resolver';


const routes: Routes = [
  { path: '', redirectTo: 'sections', pathMatch: 'full' },
  { path: 'sections', component: SectionlistComponentComponent,resolve: {state: ContentLoadResolver} },
  { path: 'portfolio/:section/:portfolio', component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
