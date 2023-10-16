import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCdrComponent } from './data-cdr.component';

describe('DataCdrComponent', () => {
  let component: DataCdrComponent;
  let fixture: ComponentFixture<DataCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataCdrComponent]
    });
    fixture = TestBed.createComponent(DataCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
