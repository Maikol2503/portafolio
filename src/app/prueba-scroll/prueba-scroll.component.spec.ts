import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaScrollComponent } from './prueba-scroll.component';

describe('PruebaScrollComponent', () => {
  let component: PruebaScrollComponent;
  let fixture: ComponentFixture<PruebaScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaScrollComponent]
    });
    fixture = TestBed.createComponent(PruebaScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
