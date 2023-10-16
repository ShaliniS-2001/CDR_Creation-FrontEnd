import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceCdrComponent } from './voice-cdr.component';

describe('VoiceCdrComponent', () => {
  let component: VoiceCdrComponent;
  let fixture: ComponentFixture<VoiceCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoiceCdrComponent]
    });
    fixture = TestBed.createComponent(VoiceCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
