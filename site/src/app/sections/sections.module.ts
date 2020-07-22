import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SectionlistComponentComponent } from './sectionlist-component/sectionlist-component.component';
import { SamplePipe } from './share/sample.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectioncardsComponent } from './sectioncards/sectioncards.component';


@NgModule({
  declarations: [SectionlistComponentComponent, SamplePipe, SectioncardsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,

  ]
})
export class SectionsModule { }
