import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';


//lthe second parameter
registerLocaleData(localEs);
registerLocaleData(localFr);
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  providers: [
    {
      provide: LOCALE_ID,
              useValue: 'es'
    }
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }