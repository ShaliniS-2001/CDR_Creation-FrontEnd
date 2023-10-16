import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhistoryComponent } from './viewhistory.component';

describe('ViewhistoryComponent', () => {
  let component: ViewhistoryComponent;
  let fixture: ComponentFixture<ViewhistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewhistoryComponent]
    });
    fixture = TestBed.createComponent(ViewhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
