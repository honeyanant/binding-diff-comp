import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcompAComponent } from './testcomp-a.component';

describe('TestcompAComponent', () => {
  let component: TestcompAComponent;
  let fixture: ComponentFixture<TestcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
