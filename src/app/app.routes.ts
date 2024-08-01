import { Routes } from '@angular/router';
import { ArchiveComponent, HomeComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'archive',
    component: ArchiveComponent,
  },
];
