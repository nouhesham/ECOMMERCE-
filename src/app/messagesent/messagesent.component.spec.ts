import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesentComponent } from './messagesent.component';

describe('MessagesentComponent', () => {
  let component: MessagesentComponent;
  let fixture: ComponentFixture<MessagesentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesentComponent]
    });
    fixture = TestBed.createComponent(MessagesentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
