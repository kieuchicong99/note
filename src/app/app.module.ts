import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Service } from './service/service';
import { AppBusinessFullEditComponent } from './app-business-full-edit/app-business-full-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AppBusinessFullEditComponent
  ],
  imports: [

  BrowserModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    FormsModule,

  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
