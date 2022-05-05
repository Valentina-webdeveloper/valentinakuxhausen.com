import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // JSONs
  projects = [{
    'name': 'Join',
    'image': 'assets/img/join.png',
    'description': 'Task Management System'
    },{
    'name': 'Ring of Fire',
    'image': 'assets/img/ring_of_fire.png',
    'description': 'Task Management System'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  //NGFOR IN HTML - SHOW PROJECTS




}
