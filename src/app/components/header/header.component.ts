import { Component, Input } from '@angular/core';
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
  @Input() darkTheme!:boolean;
  itemsNetwork: MenuNetworkItem[] = [];
  constructor() {
    this.title = "Hola, mi nombre es Yefri Gonzalez, programador, estudiante de Ingenieria en Sistemas y  estudiante de Ciberseguridad."
    this.subtitle = "Soy estudiante de 6to semestre de Ingenieria en Sistemas en Universidad San Carlos de Guatemala, tambien estudiante de Ciberseguridad en la OEA(Organizacion de los Estados Americanos)"
    this.chargueItemsNetwork();
  }


  

  chargueItemsNetwork() {
    let menuItem: MenuNetworkItem = {
      link: 'https://github.com/YefriGonzalez',
      name: 'Github',
      img: './assets/redirect.png'
    }
    let menuItem2: MenuNetworkItem = {
      link: 'https://www.linkedin.com/in/yefrigonzalez/',
      name: 'Linkedin',
      img: './assets/redirect.png'
    }
    let menuItem3: MenuNetworkItem = {
      link: 'https://www.instagram.com/yefrigonz20/',
      name: 'Instagram',
      img: './assets/redirect.png'
    }
    let menuItem4: MenuNetworkItem = {
      link: 'https://www.facebook.com/YefriGonzalez20/',
      name: 'Facebook',
      img: './assets/redirect.png'
    }
    this.itemsNetwork.push(menuItem);
    this.itemsNetwork.push(menuItem2);
    this.itemsNetwork.push(menuItem3);
    this.itemsNetwork.push(menuItem4);
  }

  scroll(component:String){
    component;
  }
}
