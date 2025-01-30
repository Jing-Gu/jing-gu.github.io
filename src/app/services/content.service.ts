import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../interfaces/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private http = inject(HttpClient);

  public getMarkdownContent(path: string) {
    return this.http.get(path, { responseType: 'text' });
  }

  public getJsonContent(path: string): Observable<Blog[]> {
    return this.http.get<Blog[]>(path, { responseType: 'json' });
  }


}
