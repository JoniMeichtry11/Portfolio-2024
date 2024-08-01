import { Component } from '@angular/core';
import {
  AboutComponent,
  ContactComponent,
  ExperienceComponent,
  MouseFollowerComponent,
  NavbarComponent,
  ProjectsComponent,
} from '../../components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    MouseFollowerComponent,
    NavbarComponent,
    ProjectsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
