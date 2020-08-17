import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HindidetailComponent } from './hindidetail.component';

describe('HindidetailComponent', () => {
  let component: HindidetailComponent;
  let fixture: ComponentFixture<HindidetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HindidetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HindidetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
