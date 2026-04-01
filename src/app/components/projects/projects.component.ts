import { Component } from '@angular/core';
import { PROJECTS } from '../../core/data/portfolio.data';
import { ProjectCardComponent } from '../../shared/molecules/project-card/project-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = PROJECTS;
}
