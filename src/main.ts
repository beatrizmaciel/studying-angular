import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  function minhaFunc(x: any,y: any) {
    return x+y;
  }

  // ES 6 ou ES 2015
  let num = 2;
  const PI = 3.14;
