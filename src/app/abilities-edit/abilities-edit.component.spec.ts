import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesEditComponent } from './abilities-edit.component';

describe('AbilitiesEditComponent', () => {
  let component: AbilitiesEditComponent;
  let fixture: ComponentFixture<AbilitiesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilitiesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
