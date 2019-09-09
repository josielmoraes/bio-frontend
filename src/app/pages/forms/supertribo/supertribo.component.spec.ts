import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupertriboComponent } from './supertribo.component';

describe('SupertriboComponent', () => {
  let component: SupertriboComponent;
  let fixture: ComponentFixture<SupertriboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupertriboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupertriboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
