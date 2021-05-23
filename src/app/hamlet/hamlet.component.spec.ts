import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamletComponent } from './hamlet.component';

describe('HamletComponent', () => {
  let component: HamletComponent;
  let fixture: ComponentFixture<HamletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
