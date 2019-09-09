import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfamiliaComponent } from './subfamilia.component';

describe('SubfamiliaComponent', () => {
  let component: SubfamiliaComponent;
  let fixture: ComponentFixture<SubfamiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubfamiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubfamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
