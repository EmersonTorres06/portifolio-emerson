import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoSkillsComponent } from './corpo-skills.component';

describe('CorpoSkillsComponent', () => {
  let component: CorpoSkillsComponent;
  let fixture: ComponentFixture<CorpoSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpoSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
