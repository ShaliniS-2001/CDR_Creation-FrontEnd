import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCdrComponent } from './sms-cdr.component';

describe('SmsCdrComponent', () => {
  let component: SmsCdrComponent;
  let fixture: ComponentFixture<SmsCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmsCdrComponent]
    });
    fixture = TestBed.createComponent(SmsCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
