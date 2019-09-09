import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinoComponent } from './reino.component';

describe('ReinoComponent', () => {
  let component: ReinoComponent;
  let fixture: ComponentFixture<ReinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
