import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SuggestComponent } from './suggest/suggest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  declarations: [AppComponent, SuggestComponent, HighlightPipe],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
