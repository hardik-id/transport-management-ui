import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelInputComponent } from './fuel-input.component';

describe('FuelInputComponent', () => {
  let component: FuelInputComponent;
  let fixture: ComponentFixture<FuelInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
