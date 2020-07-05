import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SectionlistComponentComponent } from './sectionlist-component/sectionlist-component.component';



@NgModule({
  declarations: [SectionlistComponentComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SectionsModule { }
