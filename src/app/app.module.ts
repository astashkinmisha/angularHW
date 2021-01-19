import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CarsComponent } from './cars/cars.component';
import { CarssComponent } from './carss/carss.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarsComponent,
    CarssComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
