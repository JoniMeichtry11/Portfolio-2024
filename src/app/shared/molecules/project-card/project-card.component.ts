import { Component, Input } from '@angular/core';
import { Project } from '../../../core/models/portfolio.models';
import { BadgeComponent } from '../../atoms/badge/badge.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [BadgeComponent],
  template: `
    <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-backgroundSecondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div class="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <a
            class="inline-flex items-baseline font-medium leading-tight text-textPrimary hover:text-primary focus-visible:text-primary group/link text-lg"
            [href]="project.link"
            target="_blank"
            rel="noreferrer noopener"
            [attr.aria-label]="project.title + ' (opens in a new tab)'"
          >
            <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {{ project.title }}
              <span class="inline-block text-sm ml-2 text-slate-400 font-normal">
                {{ project.type }}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
              </span>
            </span>
          </a>
        </h3>
        <p class="mt-2 text-sm leading-normal text-red-200">
          {{ project.description }}
        </p>
        
        <!-- Mobile Image -->
        <img
          [alt]="project.title"
          loading="lazy"
          class="rounded border-2 border-red-200/10 transition group-hover:border-red-200/30 w-full object-cover aspect-video sm:hidden my-4"
          [src]="project.image"
        />

        <ul class="mt-2 flex flex-wrap gap-2 pt-2" aria-label="Technologies used">
          @for (tech of project.technologies; track tech) {
            <li><app-badge [text]="tech"></app-badge></li>
          }
        </ul>
      </div>

      <!-- Desktop Image -->
      <div class="sm:order-1 sm:col-span-2 sm:translate-y-1 hidden sm:block">
        <img
          [alt]="project.title"
          loading="lazy"
          class="rounded border-2 border-red-200/10 transition group-hover:border-red-200/30 w-full object-cover sm:aspect-square"
          [src]="project.image"
        />
      </div>
    </div>
  `,
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
