import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AboutComponent,
  ContactComponent,
  ExperienceComponent,
  MouseFollowerComponent,
  NavbarComponent,
  ProjectsComponent,
} from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    NavbarComponent,
    ProjectsComponent,
    MouseFollowerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
