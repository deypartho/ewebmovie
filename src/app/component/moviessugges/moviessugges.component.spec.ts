import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviessuggesComponent } from './moviessugges.component';

describe('MoviessuggesComponent', () => {
  let component: MoviessuggesComponent;
  let fixture: ComponentFixture<MoviessuggesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviessuggesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviessuggesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
