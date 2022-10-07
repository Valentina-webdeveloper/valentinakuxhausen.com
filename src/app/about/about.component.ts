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
        animate('450ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('450ms', style({ opacity: 0, transform: 
          'translate(400px, 0)'}))
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
