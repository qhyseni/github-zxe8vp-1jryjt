import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const componets = [

]

const modules = [
  AppRoutingModule, BrowserModule, HttpClientModule
]
@NgModule({
  declarations: [AppComponent],
  imports: [...modules],
  bootstrap: [AppComponent]
})
export class AppModule {}
