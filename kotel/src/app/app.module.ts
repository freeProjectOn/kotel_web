import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlotModule } from 'ng2modules-flot';

import { AppComponent } from './app.component';
import { TempService } from "./temp.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlotModule
  ],
  providers: [TempService],
  bootstrap: [AppComponent]
})
export class AppModule { }
