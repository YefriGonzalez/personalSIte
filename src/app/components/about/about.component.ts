import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title:string;
  paragrapher1:string;
  paragrapher2:string;
  constructor(){
    this.title="Sobre mi";
    this.paragrapher1="Soy estudiante de ingeniera";
    this.paragrapher2="Trabajo en el ine";
  }
}
