import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionadventureComponent } from './actionadventure.component';

describe('ActionadventureComponent', () => {
  let component: ActionadventureComponent;
  let fixture: ComponentFixture<ActionadventureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionadventureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionadventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
