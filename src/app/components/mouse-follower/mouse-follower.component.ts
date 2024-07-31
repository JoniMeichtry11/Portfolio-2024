import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouse-follower',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './mouse-follower.component.html',
  styleUrl: './mouse-follower.component.scss'
})
export class MouseFollowerComponent {
  gradientStyle: string = 'radial-gradient(600px at 50% 50%, rgba(29, 78, 216, 0.15), transparent 80%)';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const { pageX, pageY } = event;
    const offsetX = pageX;
    const offsetY = pageY;
    this.gradientStyle = `radial-gradient(600px at ${offsetX}px ${offsetY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
  }
}
