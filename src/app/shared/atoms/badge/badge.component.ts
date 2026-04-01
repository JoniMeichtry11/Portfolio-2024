import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `<div class="flex items-center rounded-full bg-red-400/10 px-3 py-1 text-xs font-medium leading-5 text-red-300">{{ text }}</div>`,
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  @Input({ required: true }) text!: string;
}
