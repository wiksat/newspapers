import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDrugaComponent } from './lista-druga.component';

describe('ListaDrugaComponent', () => {
  let component: ListaDrugaComponent;
  let fixture: ComponentFixture<ListaDrugaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDrugaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDrugaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
