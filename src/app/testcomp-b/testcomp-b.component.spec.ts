import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcompBComponent } from './testcomp-b.component';

describe('TestcompBComponent', () => {
  let component: TestcompBComponent;
  let fixture: ComponentFixture<TestcompBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcompBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcompBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
