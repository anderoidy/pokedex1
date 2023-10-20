import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeHeaderComponent } from './poke-header.component';

describe('PokeReaderComponent', () => {
  let component: PokeHeaderComponent;
  let fixture: ComponentFixture<PokeHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeHeaderComponent]
    });
    fixture = TestBed.createComponent(PokeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
