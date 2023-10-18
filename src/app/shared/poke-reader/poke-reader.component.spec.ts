import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeReaderComponent } from './poke-reader.component';

describe('PokeReaderComponent', () => {
  let component: PokeReaderComponent;
  let fixture: ComponentFixture<PokeReaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeReaderComponent]
    });
    fixture = TestBed.createComponent(PokeReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
