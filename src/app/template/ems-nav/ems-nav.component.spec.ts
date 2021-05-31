import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsNavComponent } from './ems-nav.component';

describe('EmsNavComponent', () => {
  let component: EmsNavComponent;
  let fixture: ComponentFixture<EmsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
