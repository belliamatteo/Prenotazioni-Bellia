import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrenoViewComponent } from './preno-view/preno-view.component';
import { PrenosComponent } from './prenos/prenos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrenoViewComponent,
    PrenosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
