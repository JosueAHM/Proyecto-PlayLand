import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagRegistroUsuarioComponent } from './pag-registro-usuario.component';

describe('PagRegistroUsuarioComponent', () => {
  let component: PagRegistroUsuarioComponent;
  let fixture: ComponentFixture<PagRegistroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagRegistroUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagRegistroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
