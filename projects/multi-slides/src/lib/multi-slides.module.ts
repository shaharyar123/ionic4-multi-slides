import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MultiSlidesComponent } from './multi-slides.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideHostDirective } from './slide-host.directive';

@NgModule({
  declarations: [MultiSlidesComponent, SlideHostDirective],
  imports: [CommonModule,
    IonicModule
  ],

  exports: [MultiSlidesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class MultiSlidesModule { }
