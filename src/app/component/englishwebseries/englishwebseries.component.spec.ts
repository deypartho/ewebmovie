import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishwebseriesComponent } from './englishwebseries.component';

describe('EnglishwebseriesComponent', () => {
  let component: EnglishwebseriesComponent;
  let fixture: ComponentFixture<EnglishwebseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishwebseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishwebseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
