import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestmovieComponent } from './bestmovie.component';

describe('BestmovieComponent', () => {
  let component: BestmovieComponent;
  let fixture: ComponentFixture<BestmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
