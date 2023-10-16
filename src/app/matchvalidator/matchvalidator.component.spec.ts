import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchvalidatorComponent } from './matchvalidator.component';

describe('MatchvalidatorComponent', () => {
  let component: MatchvalidatorComponent;
  let fixture: ComponentFixture<MatchvalidatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchvalidatorComponent]
    });
    fixture = TestBed.createComponent(MatchvalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
