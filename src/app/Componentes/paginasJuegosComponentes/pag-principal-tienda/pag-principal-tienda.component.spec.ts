import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPrincipalTiendaComponent } from './pag-principal-tienda.component';

describe('PagPrincipalTiendaComponent', () => {
  let component: PagPrincipalTiendaComponent;
  let fixture: ComponentFixture<PagPrincipalTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagPrincipalTiendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagPrincipalTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
