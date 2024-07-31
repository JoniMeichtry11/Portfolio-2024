import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT, NgClass } from '@angular/common';
import {
  EasingLogic,
  NgxPageScrollCoreModule,
  PageScrollService,
} from 'ngx-page-scroll-core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgxPageScrollCoreModule, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isExpandedAbout: boolean = false;
  isExpandedExperience: boolean = false;
  isExpandedProjects: boolean = false;
  isInViewport: { [key: string]: boolean } = {
    about: false,
    experience: false,
    projects: false,
  };
  observer: IntersectionObserver = {} as IntersectionObserver;
  public myEasing: EasingLogic = (
    t: number,
    b: number,
    c: number,
    d: number
  ): number => {
    const smoothness = 1.5;
    const scaledT = t / d;

    return b + c * Math.pow(scaledT, smoothness);
  };

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            this.isInViewport[id] = true;
          } else {
            this.isInViewport[id] = false;
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll('#about, #experience, #projects');
    targets.forEach((target) => this.observer.observe(target));
  }

  scrollAbout(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#about',
      easingLogic: this.myEasing,
      duration: 1000,
    });
  }

  scrollExperience(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#experience',
      easingLogic: this.myEasing,
    });
  }

  scrollProjects(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#projects',
      easingLogic: this.myEasing,
      duration: 1000,
    });
  }
}
