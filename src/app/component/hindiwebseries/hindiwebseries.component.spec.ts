import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiwebseriesComponent } from './hindiwebseries.component';

describe('HindiwebseriesComponent', () => {
  let component: HindiwebseriesComponent;
  let fixture: ComponentFixture<HindiwebseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HindiwebseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HindiwebseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
