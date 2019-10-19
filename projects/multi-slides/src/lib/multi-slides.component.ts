import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ionic-multi-slides',
  templateUrl: './multi-slides.component.html',
  styles: []
})
export class MultiSlidesComponent implements OnInit {
  public slides = [1, 2, 3, 4];
  constructor() {
    console.log('slides ', this.slides)

  }

  ngOnInit() {
    console.log('slides ', this.slides)

  }

}
