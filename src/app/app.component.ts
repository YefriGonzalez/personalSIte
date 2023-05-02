import { Component,HostBinding,Inject,Renderer2 } from '@angular/core';
import { MenuItem } from './interfaces/menu-item';
import { ThemeService } from './services/theme.service';
import { DOCUMENT } from '@angular/common';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  items: MenuItem[] = [];
  darkMode: boolean = false;
  constructor(private themeService:ThemeService,private overlayContainer: OverlayContainer){
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

  changeMode(){
    this.darkMode=!this.darkMode;
    console.log(this.darkMode)
  }
  
}
