import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module'
import { provideAnimations } from '@angular/platform-browser/animations'


import { MainComponent } from './app/components/main/main.component';


bootstrapApplication(MainComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
