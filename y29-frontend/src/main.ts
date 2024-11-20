import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideClientHydration } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [provideClientHydration()],
}).catch((err) => console.error(err));
