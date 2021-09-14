import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  options: any;
  info: any;

  constructor(private router: Router) {
    this.options = [
      {
        title: 'Acerca de mí',
        url: '/cv-edit/about-me',
        icon: 'person'
      },
      {
        title: 'Habilidades',
        url: '/cv-edit/abilities',
        icon: 'circle-check'
      },
      {
        title: 'Lenguajes de programación',
        url: '/cv-edit/software',
        icon: 'code'
      },
      {
        title: 'Experiencia',
        url: '/cv-edit/experience',
        icon: 'briefcase-outline'
      },
      {
        title: 'Escolaridad',
        url: '/cv-edit/schoolarship',
        icon: 'book'
      },
      {
        title: 'Ver CV',
        url: '/cv',
        icon: 'file'
      }
    ];
    this.info = JSON.parse(localStorage.getItem('info'));
  }

  ngOnInit(): void {
  }

  setActive(path) {
    if (this.router.url.includes(path)) {
      return true
    }
  }

}
