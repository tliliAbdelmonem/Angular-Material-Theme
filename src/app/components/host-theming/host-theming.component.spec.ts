import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostThemingComponent } from './host-theming.component';

describe('HostThemingComponent', () => {
  let component: HostThemingComponent;
  let fixture: ComponentFixture<HostThemingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostThemingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostThemingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
