import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCdrComponent } from './location-cdr.component';

describe('LocationCdrComponent', () => {
  let component: LocationCdrComponent;
  let fixture: ComponentFixture<LocationCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationCdrComponent]
    });
    fixture = TestBed.createComponent(LocationCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
