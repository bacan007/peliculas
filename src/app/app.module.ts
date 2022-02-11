import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
