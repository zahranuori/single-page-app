import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputIntroComponent } from './input-output-intro.component';

describe('InputOutputIntroComponent', () => {
  let component: InputOutputIntroComponent;
  let fixture: ComponentFixture<InputOutputIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
