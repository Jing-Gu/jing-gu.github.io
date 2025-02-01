import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { SITE_DATA } from '../../data/site.const';

@Component({
  selector: 'app-header',
  imports: [RouterModule, RouterLink],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public nameLogo = SITE_DATA.nameLogo;
  public github = SITE_DATA.githubLink;

  public links = [
    { label: 'Home', path: '/' },
    { label: 'Whoami', path: '/whoami' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Now', path: '/now' },
    { label: 'Resume', path: '/resume' },
  ];
}
