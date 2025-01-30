import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_DATA } from '../../data/site.const';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  //private contentService = inject(ContentService);

  public github = SITE_DATA.githubLink;
  public company_url = SITE_DATA.companyLink;
  public email = "mailto:" + SITE_DATA.email;
  public linkedIn = SITE_DATA.linkedInLink;

  // public home$ = this.contentService.getMarkdownContent('/home.md').pipe(
  //   map(home => {
  //     return home.replace('{{github}}', SITE_DATA.githubLink)
  //       .replace('{{company_url}}', SITE_DATA.companyLink)
  //       .replace('{{email}}', SITE_DATA.email)
  //       .replace('{{linkedin}}', SITE_DATA.linkedInLink)
  //   })
  // );
}
