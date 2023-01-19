import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosAltosComponent } from './requisitos-altos.component';

describe('RequisitosAltosComponent', () => {
  let component: RequisitosAltosComponent;
  let fixture: ComponentFixture<RequisitosAltosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitosAltosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisitosAltosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
