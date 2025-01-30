import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-now',
  imports: [MarkdownComponent, AsyncPipe],
  templateUrl: './now.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NowComponent {

  private contentService = inject(ContentService);
  public now$ = this.contentService.getMarkdownContent('/now.md');

}
