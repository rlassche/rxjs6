import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRESTComponent } from './test-rest.component';

describe('TestRESTComponent', () => {
  let component: TestRESTComponent;
  let fixture: ComponentFixture<TestRESTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRESTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRESTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
