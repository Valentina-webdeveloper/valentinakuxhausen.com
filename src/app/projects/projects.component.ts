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
    'image': 'assets/img/join169.png',
    'technology': 'HTML, CSS, JavaScript',
    'description': 'Task Management System',
    'link': 'http://valentina-kuxhausen.developerakademie.net/m10_gruppenarbeit_join_ftp/gruppenarbeit-174/addtask.html'
    },{
    'name': 'Ring of Fire',
    'image': 'assets/img/ring_of_fire169.png',
    'technology': 'HTML, SCSS, Angular/TypeScript',
    'description': 'Multiple players card game',
    'link': 'http://valentina-kuxhausen.developerakademie.net/ringoffire/index.html'
    },{
    'name': 'El Pollo Loco',
    'image': 'assets/img/el_pollo_loco169.png',
    'technology': 'HTML, CSS, JavaScript',
    'description': 'Jump and run game',
    'link': 'http://valentina-kuxhausen.developerakademie.net/m11_el_pollo_loco/index.html'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }





}
