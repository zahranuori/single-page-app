import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchidEncapsulationComponent } from './viewchid-encapsulation.component';

describe('ViewchidEncapsulationComponent', () => {
  let component: ViewchidEncapsulationComponent;
  let fixture: ComponentFixture<ViewchidEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchidEncapsulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchidEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
