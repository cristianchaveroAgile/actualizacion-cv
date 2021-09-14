import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolarshipEditComponent } from './schoolarship-edit.component';

describe('SchoolarshipEditComponent', () => {
  let component: SchoolarshipEditComponent;
  let fixture: ComponentFixture<SchoolarshipEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolarshipEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolarshipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
