import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[libSlideHost]'
})
export class SlideHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
