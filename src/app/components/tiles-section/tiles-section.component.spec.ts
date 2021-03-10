import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesSectionComponent } from './tiles-section.component';

describe('TilesSectionComponent', () => {
  let component: TilesSectionComponent;
  let fixture: ComponentFixture<TilesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TilesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
