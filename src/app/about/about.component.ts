import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class AboutComponent implements OnInit {

  skills = ['Angular','JavaScript','HTML & CSS','Rest API','Git','Scrum','Databases','Test Automation']

  public event: boolean;

  constructor() { 
    this.event = false;
   }

  ngOnInit(): void {  }

}
