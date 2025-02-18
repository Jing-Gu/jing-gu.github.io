import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { Resume } from '../../interfaces/resume.type';

@Component({
  selector: 'app-resume',
  imports: [AsyncPipe],
  templateUrl: './resume.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeComponent {
  private contentService = inject(ContentService);
  public resume$ = this.contentService.getJsonContent<Resume>("./resume.json");

}
