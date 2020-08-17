import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiwebseriesdetailComponent } from './hindiwebseriesdetail.component';

describe('HindiwebseriesdetailComponent', () => {
  let component: HindiwebseriesdetailComponent;
  let fixture: ComponentFixture<HindiwebseriesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HindiwebseriesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HindiwebseriesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
