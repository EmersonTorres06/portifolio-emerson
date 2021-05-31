import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsModalComponent } from './ems-modal.component';

describe('EmsModalComponent', () => {
  let component: EmsModalComponent;
  let fixture: ComponentFixture<EmsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
