import { Component, Input } from '@angular/core';
import { IAcademicCourse } from 'src/app/interfaces/i-academic-course';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent {
  courses:IAcademicCourse[];
  @Input() darkTheme!:boolean;
  constructor(){
    this.courses=[];
    this.chargueCourses();
  }

  chargueCourses(){
    let course1: IAcademicCourse = {
      url: './assets/courses/usac.png',
      subttitle: '2020-Actualmente',
      title:'Ingenieria en Sistemas'
    }
    let course2: IAcademicCourse = {
      url: './assets/courses/OAS.gif',
      subttitle: 'Septiembre 2022',
      title:'OEA'
    }
    let course3: IAcademicCourse = {
      url: './assets/courses/ONE.png',
      title: 'Oracle Next Education',
      subttitle:'Junio 2022-Febrero 2023'
    }
    let course4: IAcademicCourse = {
      url: './assets/courses/sigel.png',
      title: 'Job Academy',
      subttitle:'Julio 2022-Diciembre 2022'
    }
    let course5: IAcademicCourse = {
      url: './assets/courses/platzi.png',
      title: 'Platzi',
      subttitle:'2022-Actualmente'
    }
    this.courses.push(course1);
    this.courses.push(course2);
    this.courses.push(course3);
    this.courses.push(course4);
    this.courses.push(course5);
  }
}
