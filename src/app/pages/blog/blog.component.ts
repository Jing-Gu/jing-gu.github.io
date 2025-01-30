import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { Blog } from '../../interfaces/blog.interface';

@Component({
  selector: 'app-blog',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
  private contentService = inject(ContentService);
  private router = inject(Router);
  public blogs$ = this.contentService.getJsonContent("./blog-list.json");

  public navigateToBlog(blog: Blog): void {
    const date = blog.date;
    const tags = blog.tags;
    this.router.navigate(['/blog', blog.slug], {
      state: { date, tags }
    });
  }
}
