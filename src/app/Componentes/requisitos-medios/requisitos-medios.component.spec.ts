import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosMediosComponent } from './requisitos-medios.component';

describe('RequisitosMediosComponent', () => {
  let component: RequisitosMediosComponent;
  let fixture: ComponentFixture<RequisitosMediosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitosMediosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisitosMediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
