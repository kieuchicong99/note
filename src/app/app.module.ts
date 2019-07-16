import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Service } from './service/service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

  BrowserModule,
    HttpModule,
    HttpClientModule

  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
