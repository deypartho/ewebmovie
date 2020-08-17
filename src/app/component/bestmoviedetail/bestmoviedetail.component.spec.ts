import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestmoviedetailComponent } from './bestmoviedetail.component';

describe('BestmoviedetailComponent', () => {
  let component: BestmoviedetailComponent;
  let fixture: ComponentFixture<BestmoviedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestmoviedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestmoviedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
