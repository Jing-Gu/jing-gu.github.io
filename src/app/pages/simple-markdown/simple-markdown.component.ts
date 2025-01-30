import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-simple-markdown',
  imports: [AsyncPipe, DatePipe, RouterLink, MarkdownComponent],
  templateUrl: './simple-markdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleMarkdownComponent implements OnInit {
  private contentService = inject(ContentService);
  private route = inject(ActivatedRoute);

  public date: string = '';
  public tags: string[] = [];

  public blogArticle$ = this.route.paramMap.pipe(
    switchMap(p => {
      const slug = p.get('slug');
      if (slug) {
        return this.contentService.getMarkdownContent(`blogs/${slug}.md`);
      } else {
        return of(null);
      }
    }),
    map(content => {
      if (content) {
        return this.stripFrontmatter(content)
      } else {
        return
      }
    })
  )

  private stripFrontmatter(content: string): string {
    const frontmatterRegex = /^---[\s\S]*?---\s*/;
    return content.replace(frontmatterRegex, '');
  }

  ngOnInit(): void {
    // Access data passed via state (not query params)
    const navigationState = history.state;
    if (navigationState) {
      this.date = navigationState.date;
      this.tags = navigationState.tags || [];
    }
  }
}
