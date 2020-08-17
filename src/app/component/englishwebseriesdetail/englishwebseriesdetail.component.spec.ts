import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishwebseriesdetailComponent } from './englishwebseriesdetail.component';

describe('EnglishwebseriesdetailComponent', () => {
  let component: EnglishwebseriesdetailComponent;
  let fixture: ComponentFixture<EnglishwebseriesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishwebseriesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishwebseriesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
