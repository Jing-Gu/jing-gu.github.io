import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private http = inject(HttpClient);

  public getMarkdownContent(path: string) {
    return this.http.get(path, { responseType: 'text' });
  }

  public getJsonContent<T>(path: string): Observable<T> {
    return this.http.get<T>(path, { responseType: 'json' });
  }


}
