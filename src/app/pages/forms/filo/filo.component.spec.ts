import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiloComponent } from './filo.component';

describe('FiloComponent', () => {
  let component: FiloComponent;
  let fixture: ComponentFixture<FiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
