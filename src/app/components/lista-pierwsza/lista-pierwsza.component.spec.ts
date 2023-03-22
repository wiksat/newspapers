import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPierwszaComponent } from './lista-pierwsza.component';

describe('ListaPierwszaComponent', () => {
  let component: ListaPierwszaComponent;
  let fixture: ComponentFixture<ListaPierwszaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPierwszaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPierwszaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
