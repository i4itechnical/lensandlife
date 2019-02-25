import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandlmaterialModule } from './landlmaterial.module';
import { LandlcoreModule } from './landlcore/landlcore.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandlmaterialModule,
    LandlcoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
