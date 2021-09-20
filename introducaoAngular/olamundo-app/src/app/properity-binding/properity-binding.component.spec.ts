import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperityBindingComponent } from './properity-binding.component';

describe('ProperityBindingComponent', () => {
  let component: ProperityBindingComponent;
  let fixture: ComponentFixture<ProperityBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProperityBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProperityBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
