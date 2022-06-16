import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopMenuButtonComponent } from './pop-menu-button.component';

describe('PopMenuButtonComponent', () => {
  let component: PopMenuButtonComponent;
  let fixture: ComponentFixture<PopMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopMenuButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
