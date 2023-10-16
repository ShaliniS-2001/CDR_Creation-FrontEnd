import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipVideoCdrComponent } from './voip-video-cdr.component';

describe('VoipVideoCdrComponent', () => {
  let component: VoipVideoCdrComponent;
  let fixture: ComponentFixture<VoipVideoCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoipVideoCdrComponent]
    });
    fixture = TestBed.createComponent(VoipVideoCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
