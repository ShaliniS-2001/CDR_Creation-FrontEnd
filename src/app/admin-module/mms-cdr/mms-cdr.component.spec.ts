import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmsCdrComponent } from './mms-cdr.component';

describe('MmsCdrComponent', () => {
  let component: MmsCdrComponent;
  let fixture: ComponentFixture<MmsCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MmsCdrComponent]
    });
    fixture = TestBed.createComponent(MmsCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
