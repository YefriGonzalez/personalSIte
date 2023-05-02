import { Component, Input } from '@angular/core';
import { IHobbie } from 'src/app/interfaces/i-hobbie';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {
  hobbies:IHobbie[];
  @Input() darkTheme!:boolean;
  constructor(){
    this.hobbies=[];
    this.chargueHobbies();
  }

  chargueHobbies(){
    let skill1: IHobbie = {
      url: './assets/hobbies/guitar.png',
      name: 'Tocar Guitarra',
    }
    let skill2: IHobbie = {
      url: './assets/hobbies/batery.png',
      name: 'Tocar Bateria',
    }
    let skill3: IHobbie = {
      url: './assets/hobbies/plane.png',
      name: 'Viajar',
     
    }
    let skill5: IHobbie = {
      url: './assets/hobbies/game.png',
      name: 'Videojuegos',
    }
    let skill6: IHobbie = {
      url: './assets/hobbies/headphones.png',
      name: 'Escuchar Musica',
    }
    let skill7: IHobbie = {
      url: './assets/hobbies/tv.png',
      name: 'Ver series',
    }
  
   
    this.hobbies.push(skill1);
    this.hobbies.push(skill2);
    this.hobbies.push(skill3);
    this.hobbies.push(skill5);
    this.hobbies.push(skill6);
    this.hobbies.push(skill7);
  }
}
