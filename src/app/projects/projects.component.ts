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
    'description': 'Task Management System',
    'link': 'url("http://valentina-kuxhausen.developerakademie.net/m10_gruppenarbeit_join_ftp/gruppenarbeit-174/addtask.html")'
    },{
    'name': 'Ring of Fire',
    'image': 'assets/img/ring_of_fire.png',
    'description': 'Multiple players card game',
    'link': 'href=http://valentina-kuxhausen.developerakademie.net/m10_gruppenarbeit_join_ftp/gruppenarbeit-174/addtask.html'

    }
  ]

  constructor() { }

  ngOnInit(): void {
  }





}
