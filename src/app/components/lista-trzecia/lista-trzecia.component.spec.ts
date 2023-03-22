import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrzeciaComponent } from './lista-trzecia.component';

describe('ListaTrzeciaComponent', () => {
  let component: ListaTrzeciaComponent;
  let fixture: ComponentFixture<ListaTrzeciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTrzeciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTrzeciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
