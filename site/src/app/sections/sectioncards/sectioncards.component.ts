import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sectioncards',
  templateUrl: './sectioncards.component.html',
  styleUrls: ['./sectioncards.component.scss']
})
export class SectioncardsComponent implements OnInit {

  @Input() cards: any;
  @Input() section: string;
  constructor() {}

  ngOnInit(): void {
  }
}
