import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon/icon-module';
import { BrowserModule } from '@angular/platform-browser';
import { QueryBuilderModule } from 'angular2-query-builder';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, MatIconModule, QueryBuilderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
