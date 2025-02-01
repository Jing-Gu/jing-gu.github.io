import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-default-layout',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './default-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent {
  public year = new Date().getFullYear();
}
