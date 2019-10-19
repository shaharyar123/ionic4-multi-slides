import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSlidesComponent } from './multi-slides.component';

describe('MultiSlidesComponent', () => {
  let component: MultiSlidesComponent;
  let fixture: ComponentFixture<MultiSlidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSlidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
