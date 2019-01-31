import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcompAComponent } from './testcomp-a/testcomp-a.component';
import { TestcompBComponent } from './testcomp-b/testcomp-b.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcompAComponent,
    TestcompBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
