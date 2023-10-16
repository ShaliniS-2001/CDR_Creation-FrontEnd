import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipCdrComponent } from './voip-cdr.component';

describe('VoipCdrComponent', () => {
  let component: VoipCdrComponent;
  let fixture: ComponentFixture<VoipCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoipCdrComponent]
    });
    fixture = TestBed.createComponent(VoipCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
