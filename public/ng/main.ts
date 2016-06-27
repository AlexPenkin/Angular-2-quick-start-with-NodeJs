import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { XHRBackend }   from '@angular/http';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
