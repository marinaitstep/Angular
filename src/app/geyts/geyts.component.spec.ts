import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeytsComponent } from './geyts.component';

describe('GeytsComponent', () => {
  let component: GeytsComponent;
  let fixture: ComponentFixture<GeytsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeytsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeytsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
