import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FSCButtonComponent } from './fsc-button.component';

describe('FSCButtonComponent', () => {
  let component: FSCButtonComponent;
  let fixture: ComponentFixture<FSCButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FSCButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FSCButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
