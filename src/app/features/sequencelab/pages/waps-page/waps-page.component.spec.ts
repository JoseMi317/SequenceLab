import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WapsPageComponent } from './waps-page.component';

describe('WapsPageComponent', () => {
  let component: WapsPageComponent;
  let fixture: ComponentFixture<WapsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WapsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WapsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
