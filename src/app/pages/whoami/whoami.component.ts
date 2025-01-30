import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-whoami',
  imports: [AsyncPipe, MarkdownComponent],
  templateUrl: './whoami.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhoamiComponent {
  private contentService = inject(ContentService);
  public aboutme$ = this.contentService.getMarkdownContent('/whoami.md');
}
