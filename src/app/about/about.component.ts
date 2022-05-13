import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  //JSON-ARRAY WITH SKILLS
  skills = ['Angular','JavaScript','HTML & SCSS','Rest API','Git','Scrum','Databases','Test Automation']

  constructor() { }

  skillFlyAnimation = false;

  skillFly() {
    setTimeout(function () { 
      this.skillFlyAnimation = true;
    }, 2000);
  }

  ngOnInit(): void {
    this.skillFly();
  }

}
