import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiSlidesComponent } from 'projects/multi-slides/src/public-api';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    MultiSlidesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
