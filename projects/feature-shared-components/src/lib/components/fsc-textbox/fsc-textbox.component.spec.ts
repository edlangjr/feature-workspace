import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FSCTextboxComponent } from './fsc-textbox.component';

describe('FSCTextboxComponent', () => {
  let component: FSCTextboxComponent;
  let fixture: ComponentFixture<FSCTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FSCTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FSCTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
