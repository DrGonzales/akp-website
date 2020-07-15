import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfoliocontent',
  templateUrl: './portfoliocontent.component.html',
  styleUrls: ['./portfoliocontent.component.scss']
})
export class PortfoliocontentComponent implements OnInit {
  @Input() longtext: string;

  constructor() { }

  ngOnInit(): void {
  }

}
