import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCoreComponent } from './ui-core.component';

describe('UiCoreComponent', () => {
  let component: UiCoreComponent;
  let fixture: ComponentFixture<UiCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
