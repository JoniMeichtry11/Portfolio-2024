import { Component, Input } from '@angular/core';
import { Experience } from '../../../core/models/portfolio.models';
import { BadgeComponent } from '../../atoms/badge/badge.component';

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  imports: [BadgeComponent],
  template: `
    <div class="relative border-l border-red-200/20 ml-3">
      @for (exp of experiences; track exp.id) {
        <div class="mb-10 ml-6 group">
          <div class="absolute w-3 h-3 bg-red-200/50 rounded-full -left-1.5 mt-1.5 border border-secondary transition-colors group-hover:bg-primary"></div>
          <div class="bg-backgroundSecondary/20 p-5 rounded-lg border border-red-200/10 hover:border-red-200/30 transition-all hover:bg-backgroundSecondary/40 lg:hover:shadow-lg">
            <span class="text-sm text-red-300 font-semibold mb-1 block uppercase tracking-wider">{{ exp.period }}</span>
            <h3 class="text-xl font-bold text-textPrimary group-hover:text-primary transition-colors">{{ exp.role }}</h3>
            <h4 class="text-base text-red-200 mb-2 font-medium">{{ exp.company }}</h4>
            <p class="text-sm text-slate-300 mb-3 leading-relaxed">{{ exp.description }}</p>
            
            <ul class="list-disc list-outside ml-4 text-sm text-slate-300 mb-4 space-y-1">
              @for (achievement of exp.achievements; track achievement) {
                <li class="marker:text-red-400/50">{{ achievement }}</li>
              }
            </ul>

            <ul class="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
              @for (skill of exp.skills; track skill) {
                <li><app-badge [text]="skill"></app-badge></li>
              }
            </ul>
          </div>
        </div>
      }
    </div>
  `,
  styleUrl: './experience-timeline.component.scss'
})
export class ExperienceTimelineComponent {
  @Input({ required: true }) experiences!: Experience[];
}
