import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteColorsComponent } from './palette-colors.component';

describe('PaletteColorsComponent', () => {
  let component: PaletteColorsComponent;
  let fixture: ComponentFixture<PaletteColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaletteColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaletteColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
