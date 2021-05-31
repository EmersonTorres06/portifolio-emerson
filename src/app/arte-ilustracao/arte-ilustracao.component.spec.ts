import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArteIlustracaoComponent } from './arte-ilustracao.component';

describe('ArteIlustracaoComponent', () => {
  let component: ArteIlustracaoComponent;
  let fixture: ComponentFixture<ArteIlustracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArteIlustracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArteIlustracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
