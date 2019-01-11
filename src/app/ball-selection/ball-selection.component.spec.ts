import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallSelectionComponent } from './ball-selection.component';

describe('BallSelectionComponent', () => {
  let component: BallSelectionComponent;
  let fixture: ComponentFixture<BallSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
