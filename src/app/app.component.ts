import { Component } from '@angular/core';
import { Testing1Component } from './testing-components/testing1/testing1.component';
import { Testing2Component } from './testing-components/testing2/testing2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ionic4-multi-slides';
  components = [Testing1Component, Testing2Component];
}
