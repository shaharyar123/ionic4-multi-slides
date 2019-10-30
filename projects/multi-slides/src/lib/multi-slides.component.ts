import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewChildren, QueryList, ViewContainerRef } from '@angular/core';
import { SlideHostDirective } from './slide-host.directive';

@Component({
  selector: 'ionic-multi-slides',
  templateUrl: './multi-slides.component.html',
  styles: []
})
export class MultiSlidesComponent implements OnInit {
  @Input() components: Array<any>;
  @ViewChild(SlideHostDirective) slideHostDirective: SlideHostDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }
  ngOnInit() { }
  ngAfterViewInit() {
    console.log('slides ', this.slideHostDirective, this.components)
    this.components.forEach((item, index) => {
      const cf = this.componentFactoryResolver.resolveComponentFactory(this.components[index]);
      const vcr = this.slideHostDirective.viewContainerRef;
      vcr.clear();
      vcr.createComponent(cf);
    });

  }

}
