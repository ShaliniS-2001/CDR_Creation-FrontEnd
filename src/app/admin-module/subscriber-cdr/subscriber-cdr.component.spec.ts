import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberCdrComponent } from './subscriber-cdr.component';

describe('SubscriberCdrComponent', () => {
  let component: SubscriberCdrComponent;
  let fixture: ComponentFixture<SubscriberCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriberCdrComponent]
    });
    fixture = TestBed.createComponent(SubscriberCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
