import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificariComponent } from './notificari.component';

describe('NotificariComponent', () => {
  let component: NotificariComponent;
  let fixture: ComponentFixture<NotificariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
