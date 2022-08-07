import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPsychologistsComponent } from './for-psychologists.component';

describe('ForPsychologistsComponent', () => {
  let component: ForPsychologistsComponent;
  let fixture: ComponentFixture<ForPsychologistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForPsychologistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForPsychologistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
