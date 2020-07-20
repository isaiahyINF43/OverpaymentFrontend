import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControloverpaymentsComponent } from './controloverpayments.component';

describe('ControloverpaymentsComponent', () => {
  let component: ControloverpaymentsComponent;
  let fixture: ComponentFixture<ControloverpaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControloverpaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControloverpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
