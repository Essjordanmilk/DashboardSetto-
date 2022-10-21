import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMainComponent } from './formulario-main.component';

describe('FormularioMainComponent', () => {
  let component: FormularioMainComponent;
  let fixture: ComponentFixture<FormularioMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
