import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiSlidesComponent } from 'projects/multi-slides/src/public-api';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Testing1Component } from './testing-components/testing1/testing1.component';
import { Testing2Component } from './testing-components/testing2/testing2.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiSlidesComponent,
    Testing1Component,
    Testing2Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    Testing1Component,
    Testing2Component]
})
export class AppModule { }
