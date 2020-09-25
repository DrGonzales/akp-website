import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SectionlistComponentComponent } from './sectionlist-component/sectionlist-component.component';
import { CombinePipe } from './share/combine.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectioncardsComponent } from './sectioncards/sectioncards.component';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  declarations: [ SectionlistComponentComponent, CombinePipe, SectioncardsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    PipesModule,
  ]
})
export class SectionsModule { }
