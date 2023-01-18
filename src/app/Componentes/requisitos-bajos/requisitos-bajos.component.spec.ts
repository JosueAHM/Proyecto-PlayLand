import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosBajosComponent } from './requisitos-bajos.component';

describe('RequisitosBajosComponent', () => {
  let component: RequisitosBajosComponent;
  let fixture: ComponentFixture<RequisitosBajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitosBajosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisitosBajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
