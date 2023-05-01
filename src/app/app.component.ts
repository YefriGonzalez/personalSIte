import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal_website';
  items: MenuItem[] = [];
  constructor(){
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
}
