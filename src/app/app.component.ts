import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { SITE_DATA } from './data/site.const';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {

  public nameLogo = SITE_DATA.nameLogo;
  public github = SITE_DATA.githubLink;
  public year = new Date().getFullYear();

  public links = [
    { label: 'Home', path: '/' },
    { label: 'Whoami', path: '/whoami' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Now', path: '/now' },
  ];
}
