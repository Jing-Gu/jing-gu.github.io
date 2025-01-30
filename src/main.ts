import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

import { routes } from './app/app.routes';
import { provideMarkdown, MarkdownModule } from 'ngx-markdown';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';


const myAppConfig = {
  ...appConfig,  // Spread existing appConfig if necessary
  imports: [
    MarkdownModule.forRoot(),  // Import MarkdownModule for ngx-markdown
  ],
  providers: [
    provideRouter(routes),
    provideMarkdown({ loader: HttpClient }),
    provideHttpClient(),
  ]
}


bootstrapApplication(AppComponent, myAppConfig)
  .catch((err) => console.error(err));