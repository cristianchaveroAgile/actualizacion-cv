import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CV Chavero';

  ngOnInit() {
//     El método getItem () devuelve el valor del elemento de objeto de almacenamiento especificado.

// El método getItem () pertenece al objeto de almacenamiento, que puede ser un objeto localStorage o un objeto sessionStorage
    if (!localStorage.getItem('info')) {
      const info = {
        name: 'Cristian Amauri',
        lastname: 'Chavero Díaz',
        position: 'Consultor Jr.',
        description: 'Ing. En Sistemas Computacionales egresado del Tecnológico de Estudios superiores de Cuautitlán Izcalli, con experiencia en Tech Lead. Soy una persona creativa dinámica que gusta trabajar en equipo siempre brindado soluciones a la demanda del negocio.',
        facebook: 'https://www.facebook.com/AgileThought',
        linkedin: 'https://www.linkedin.com/company/agilethought-latam/',
        github: 'https://github.com/cristianchaveroAgile',
        phone: '55 65 71 39 39',
        email: 'cristian.chavero@agilethought.com',
        address: 'Cuautitlán Izcalli, Estado de México',
        hobbies: [
          'Música',
          'Ciclismo',
          'Deportes',
          'Turismo'
        ],
        languages: [
          {
            language: 'Español',
            percentage: 100
          },
          {
            language: 'Inglés',
            percentage: 30
          }
        ],
        abilities: [
          {
            ability: 'Trabajo en equipo',
            percentage: 100
          },
          {
            ability: 'Comunicación acertiva',
            percentage: 70
          },
          {
            ability: 'Creatividad',
            percentage: 80
          }
        ],
        software: [
          {
            software: 'JavaScript',
            percentage: 30
          },
          {
            software: 'Python',
            percentage: 20
          },
          {
            software: 'HTML',
            percentage: 80
          },
          {
            software: 'CSS',
            percentage: 80
          },
          {
            software: 'Angular',
            percentage: 30
          },
          {
            software: 'Java',
            percentage: 30
          }
        ],
        experience: [
          {
            job: 'Consultor Jr.',
            company: 'AgileThought',
            description: 'Trainig',
            initialDate: '05-2021',
            endDate: ''
          },
          {
            job: 'Tech Lead',
            company: 'DocSolutions',
            description: 'Encargado del área de digitalización',
            initialDate: '08-01-2018',
            endDate: '02-2021'
          },

        ],
        scholarship: [

          {
            school: 'Técnologico de Estudios Superiores de Cuatitlán Izcalli',
            specialty: 'Ing. En Sistemas Computacionales',
            initialDate: '08-2016',
            endDate: '01-2021'
          }
        ]
      }
      localStorage.setItem('info', JSON.stringify(info));
//       El método setItem () establece el valor del elemento de objeto de almacenamiento especificado.

// El método setItem () pertenece al objeto de almacenamiento, que puede ser un objeto localStorage o un objeto sessionStorrage
    }
  }
}
