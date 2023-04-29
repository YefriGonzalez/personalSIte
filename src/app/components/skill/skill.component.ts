import { Component } from '@angular/core';
import { ISkill } from 'src/app/interfaces/i-skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  skills:ISkill[];
  constructor(){
    this.skills=[];
    this.chargueSkills()
  }
  chargueSkills(){
    let skill1: ISkill = {
      url: './assets/icons/html.png',
      name: 'HTML5',
    }
    let skill2: ISkill = {
      url: './assets/icons/javascript.png',
      name: 'JAVASCRIPT',
    }
    let skill3: ISkill = {
      url: './assets/icons/php.png',
      name: 'PHP',
     
    }
    let skill4: ISkill = {
      url: './assets/icons/laravel.png',
      name: 'LARAVEL',
    }
    let skill5: ISkill = {
      url: './assets/icons/html.png',
      name: 'CSS',
    }
    let skill6: ISkill = {
      url: './assets/icons/java_original.png',
      name: 'JAVA',
    }
    let skill7: ISkill = {
      url: './assets/icons/angular.png',
      name: 'ANGULAR',
    }
    let skill8: ISkill = {
      url: './assets/icons/mysql.png',
      name: 'MYSQL',
    }
    let skill9: ISkill = {
      url: './assets/icons/plsql.png',
      name: 'PL/SQL',
    }
    let skill10: ISkill = {
      url: './assets/icons/ubuntu.png',
      name: 'UBUNTU',
    }
    let skill11: ISkill = {
      url: './assets/icons/kali-linux.png',
      name: 'KALI',
    }
    let skill13: ISkill = {
      url: './assets/icons/docker.png',
      name: 'DOCKER',
    }
    let skill14: ISkill = {
      url: './assets/icons/c.png',
      name: 'C#',
    }
    let skill15: ISkill = {
      url: './assets/icons/cpp.png',
      name: 'C++',
    }
    let skill16: ISkill = {
      url: './assets/icons/git.png',
      name: 'GIT',
    }
    let skill17: ISkill = {
      url: './assets/icons/typescript.png',
      name: 'TYPESCRIPT',
    }
    this.skills.push(skill1);
    this.skills.push(skill2);
    this.skills.push(skill3);
    this.skills.push(skill4);
    this.skills.push(skill5);
    this.skills.push(skill6);
    this.skills.push(skill7);
    this.skills.push(skill8);
    this.skills.push(skill9);
    this.skills.push(skill10);
    this.skills.push(skill11);
   
    this.skills.push(skill13);
    this.skills.push(skill14);
    this.skills.push(skill15);
    this.skills.push(skill16);
    this.skills.push(skill13);
  }
}
