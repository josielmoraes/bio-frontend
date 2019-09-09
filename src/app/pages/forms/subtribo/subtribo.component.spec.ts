import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtriboComponent } from './subtribo.component';

describe('SubtriboComponent', () => {
  let component: SubtriboComponent;
  let fixture: ComponentFixture<SubtriboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtriboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtriboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
