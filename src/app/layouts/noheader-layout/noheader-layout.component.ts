import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-noheader-layout',
  imports: [RouterOutlet],
  templateUrl: './noheader-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoheaderLayoutComponent {
  public year = new Date().getFullYear();
}
