import { Component, OnInit } from '@angular/core';
import { ContentAdapterService } from './share/content-adapter-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  constructor(private content: ContentAdapterService){}
  ngOnInit(): void {
    this.content.getContent().subscribe(r => console.log(r));
  }


}