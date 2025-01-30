import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'whoami',
    loadComponent: () => import('./pages/whoami/whoami.component').then(c => c.WhoamiComponent),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(c => c.ProjectsComponent),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then(c => c.BlogComponent),
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/simple-markdown/simple-markdown.component').then(c => c.SimpleMarkdownComponent)
  },
  {
    path: 'now',
    loadComponent: () => import('./pages/now/now.component').then(c => c.NowComponent)
  },
  // { path: '404', component: NotFoundComponent },
  // { path: '**', redirectTo: '404' }
];
