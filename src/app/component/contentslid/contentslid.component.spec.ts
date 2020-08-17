import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentslidComponent } from './contentslid.component';

describe('ContentslidComponent', () => {
  let component: ContentslidComponent;
  let fixture: ComponentFixture<ContentslidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentslidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentslidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
