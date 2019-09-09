import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriboComponent } from './tribo.component';

describe('TriboComponent', () => {
  let component: TriboComponent;
  let fixture: ComponentFixture<TriboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
