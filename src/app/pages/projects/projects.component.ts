import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-projects',
  imports: [AsyncPipe],
  templateUrl: './projects.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {

  //private contentService = inject(ContentService);

}
