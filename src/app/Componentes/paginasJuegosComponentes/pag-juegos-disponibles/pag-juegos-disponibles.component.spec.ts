import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagJuegosDisponiblesComponent } from './pag-juegos-disponibles.component';

describe('PagJuegosDisponiblesComponent', () => {
  let component: PagJuegosDisponiblesComponent;
  let fixture: ComponentFixture<PagJuegosDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagJuegosDisponiblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagJuegosDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
