import * as _ from 'lodash';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HighlightService } from '../shared/highlight.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ---- import different modules:
import { MaterialModules } from '../shared/material.module';
import { ComponentModule } from '../shared/component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModules,
    ComponentModule.forRoot(),
  ],
  providers: [
    HighlightService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
