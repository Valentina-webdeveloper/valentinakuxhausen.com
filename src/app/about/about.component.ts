import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  //JSON-ARRAY WITH SKILLS
  skills = ['Angular','JavaScript','HTML & SCSS','Rest API','Databases','Test Automation', 'Git', 'Scrum']

  constructor() { }

  ngOnInit(): void {
  }

}
