import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnersearchComponent } from './innersearch.component';

describe('InnersearchComponent', () => {
  let component: InnersearchComponent;
  let fixture: ComponentFixture<InnersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnersearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
