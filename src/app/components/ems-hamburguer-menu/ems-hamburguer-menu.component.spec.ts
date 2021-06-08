import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsHamburguerMenuComponent } from './ems-hamburguer-menu.component';

describe('EmsHamburguerMenuComponent', () => {
  let component: EmsHamburguerMenuComponent;
  let fixture: ComponentFixture<EmsHamburguerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmsHamburguerMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmsHamburguerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
