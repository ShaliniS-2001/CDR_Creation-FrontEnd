import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoamingSmsCdrComponent } from './roaming-sms-cdr.component';

describe('RoamingSmsCdrComponent', () => {
  let component: RoamingSmsCdrComponent;
  let fixture: ComponentFixture<RoamingSmsCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoamingSmsCdrComponent]
    });
    fixture = TestBed.createComponent(RoamingSmsCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
