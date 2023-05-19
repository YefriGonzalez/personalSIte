import { Component, HostBinding, Inject, Renderer2 } from '@angular/core';
import { MenuItem } from './interfaces/menu-item';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `@media (max-width: 1024px) {

      #menu__list {
          display: none;
      }
  
      #menu__list:last-child {
          display: block;
      }
  
  }
  
  /* Medium only */
  @media (max-width: 480px) {
      .icon{
          display: none;
      }
      #menu__list {
          display: none;
      }
  
      #menu__list:last-child {
          display: block;
      }
  }`
  ]
})
export class AppComponent {

  items: MenuItem[] = [];
  darkMode:boolean=false;
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.chargueMenuItems();
  }
  chargueMenuItems() {
    let menuItem: MenuItem = {
      link: '#about',
      name: 'Sobre mi'
    }
    let menuItem2: MenuItem = {
      link: '#skills',
      name: 'Skills'
    }
    let menuItem3: MenuItem = {
      link: '#hobbies',
      name: 'Hobbies'
    }
    let menuItem4: MenuItem = {
      link: '#academic',
      name: 'Formación'
    }
    let menuItem5: MenuItem = {
      link: '#experience',
      name: 'Experiencia Profesional'
    }
    this.items.push(menuItem);
    this.items.push(menuItem2);
    this.items.push(menuItem3);
    this.items.push(menuItem4);
    this.items.push(menuItem5);
  }

  onChangue(event:boolean) {
    this.darkMode=event;
    if (event) {
      this.document.body.classList.add('dark-mode');
    } else {
      this.document.body.classList.remove('dark-mode');
    }
  }
  changeMode(){
    this.darkMode=!this.darkMode;
    if (this.darkMode) {
      this.document.body.classList.add('dark-mode');
    } else {
      this.document.body.classList.remove('dark-mode');
    }
  }

}
