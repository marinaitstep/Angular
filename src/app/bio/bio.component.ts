import { Component, OnInit } from '@angular/core';
import {Photo} from './photo';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  photo: Photo = {
        path: "../assets/bill.jpg"
    
 };

  constructor() { }

  ngOnInit(): void {
  }

}
