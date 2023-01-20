import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagProximosLanzamientosComponent } from './pag-proximos-lanzamientos.component';

describe('PagProximosLanzamientosComponent', () => {
  let component: PagProximosLanzamientosComponent;
  let fixture: ComponentFixture<PagProximosLanzamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagProximosLanzamientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagProximosLanzamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
