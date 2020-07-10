import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SectionlistComponentComponent } from './sectionlist-component/sectionlist-component.component';
import { SamplePipe } from './share/sample.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [SectionlistComponentComponent, SamplePipe],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,

  ]
})
export class SectionsModule { }
