import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislatieComponent } from './legislatie.component';

describe('LegislatieComponent', () => {
  let component: LegislatieComponent;
  let fixture: ComponentFixture<LegislatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegislatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
