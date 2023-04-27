import { Component } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item';
import { MenuNetworkItem } from 'src/app/interfaces/menu-network-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string;
  subtitle: string;
  items: MenuItem[] = [];
  itemsNetwork: MenuNetworkItem[] = [];
  constructor() {
    this.title = "Hola, mi nombre es Yefri Gonzalez, programador, estudiante de Ingenieria en Sistemas, estudiante de Ciberseguridad."
    this.subtitle = "Soy estudiante de 6to semestre de Ingenieria en Sistemas en Universidad San Carlos de Guatemala, tambien estudiante de Ciberseguridad en la OEA(Organizacion de los Estados Americanos)"
    this.chargueMenuItems();
    this.chargueItemsNetwork();
  }


  chargueMenuItems() {
    let menuItem: MenuItem = {
      link: '',
      name: 'Sobre mi'
    }
    let menuItem2: MenuItem = {
      link: '',
      name: 'Skills'
    }
    let menuItem3: MenuItem = {
      link: '',
      name: 'hobbies'
    }
    let menuItem4: MenuItem = {
      link: '',
      name: 'Formación'
    }
    let menuItem5: MenuItem = {
      link: '',
      name: 'Proyectos'
    }
    this.items.push(menuItem);
    this.items.push(menuItem2);
    this.items.push(menuItem3);
    this.items.push(menuItem4);
    this.items.push(menuItem5);
  }

  chargueItemsNetwork() {
    let menuItem: MenuNetworkItem = {
      link: 'https://github.com/YefriGonzalez',
      name: 'Github',
      img: '../../../assets/redirect.png'
    }
    let menuItem2: MenuNetworkItem = {
      link: 'https://www.linkedin.com/in/yefrigonzalez/',
      name: 'Linkedin',
      img: '../../../assets/redirect.png'
    }
    let menuItem3: MenuNetworkItem = {
      link: '',
      name: 'Instagram',
      img: '../../../assets/redirect.png'
    }
    let menuItem4: MenuNetworkItem = {
      link: '',
      name: 'Currículo',
      img: '../../../assets/redirect.png'
    }
    this.itemsNetwork.push(menuItem);
    this.itemsNetwork.push(menuItem2);
    this.itemsNetwork.push(menuItem3);
    this.itemsNetwork.push(menuItem4);
  }

}
