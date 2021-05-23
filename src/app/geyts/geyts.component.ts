import { Component, OnInit } from '@angular/core';
import {Quotes} from './quotes';

@Component({
  selector: 'app-geyts',
  templateUrl: './geyts.component.html',
  styleUrls: ['./geyts.component.css']
})


  

export class GeytsComponent implements OnInit {
  quotes: Quotes[] = [
    {id: 1,
    quote: "If you think your teacher is tough, wait till you get a boss"},
    {id: 2,
      quote: "Life is not fair — get used to it!"},
    {id: 3,
        quote: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose"},
    {id: 4,
          quote: "Be nice to nerds. Chances are you’ll end up working for one"}
          
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
