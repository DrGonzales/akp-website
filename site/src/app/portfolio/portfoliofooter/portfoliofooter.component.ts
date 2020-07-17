import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfoliofooter',
  templateUrl: './portfoliofooter.component.html',
  styleUrls: ['./portfoliofooter.component.scss']
})
export class PortfoliofooterComponent implements OnInit {

  @Input() shorttext: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
