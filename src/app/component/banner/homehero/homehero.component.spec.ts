import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeheroComponent } from './homehero.component';

describe('HomeheroComponent', () => {
  let component: HomeheroComponent;
  let fixture: ComponentFixture<HomeheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
