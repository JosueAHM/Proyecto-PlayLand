import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagUltimosLanzamientosComponent } from './pag-ultimos-lanzamientos.component';

describe('PagUltimosLanzamientosComponent', () => {
  let component: PagUltimosLanzamientosComponent;
  let fixture: ComponentFixture<PagUltimosLanzamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagUltimosLanzamientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagUltimosLanzamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
