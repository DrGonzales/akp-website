import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SectionlistComponentComponent } from './sections/sectionlist-component/sectionlist-component.component';


const routes: Routes = [
  { path: '', component: SectionlistComponentComponent },
  { path: 'portfolio/:portfolio', component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
