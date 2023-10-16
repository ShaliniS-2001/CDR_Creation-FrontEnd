import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoamingVoiceCdrComponent } from './roaming-voice-cdr.component';

describe('RoamingVoiceCdrComponent', () => {
  let component: RoamingVoiceCdrComponent;
  let fixture: ComponentFixture<RoamingVoiceCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoamingVoiceCdrComponent]
    });
    fixture = TestBed.createComponent(RoamingVoiceCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
