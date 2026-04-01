import { Component } from '@angular/core';
import { EXPERIENCES } from '../../core/data/portfolio.data';
import { ExperienceTimelineComponent } from '../../shared/organisms/experience-timeline/experience-timeline.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceTimelineComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
}
