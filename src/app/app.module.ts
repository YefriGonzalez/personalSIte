import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillComponent } from './components/skill/skill.component';
import { AboutComponent } from './components/about/about.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { AcademicComponent } from './components/academic/academic.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillComponent,
    AboutComponent,
    HobbiesComponent,
    AcademicComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
